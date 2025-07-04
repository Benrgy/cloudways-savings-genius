import { useEffect } from 'react';
import { useAnalytics } from '@/lib/analytics';

// Component to monitor Core Web Vitals and performance metrics
const PerformanceMonitor = () => {
  const { track } = useAnalytics();

  useEffect(() => {
    // Track page load performance
    const trackPageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        const firstPaint = performance.getEntriesByName('first-paint')[0]?.startTime || 0;
        const firstContentfulPaint = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;

        track('performance_metrics', {
          loadTime,
          domContentLoaded,
          firstPaint,
          firstContentfulPaint,
          connectionType: (navigator as any).connection?.effectiveType || 'unknown'
        });
      }
    };

    // Track Core Web Vitals with basic performance API
    const trackWebVitals = () => {
      // Use basic performance API instead of web-vitals library
      trackPageLoad();
      
      // Track basic paint metrics
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach(entry => {
        track('paint_metric', {
          name: entry.name,
          startTime: entry.startTime,
          duration: entry.duration
        });
      });
      
      // Track largest contentful paint if available
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              track('largest_contentful_paint', {
                value: lastEntry.startTime,
                rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
              });
            }
          });
          observer.observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {
          console.log('LCP observer not supported');
        }
      }
    };

    // Wait for page to fully load before tracking
    if (document.readyState === 'complete') {
      trackWebVitals();
    } else {
      window.addEventListener('load', trackWebVitals);
    }

    // Track memory usage if available
    const trackMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        track('memory_usage', {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit
        });
      }
    };

    // Track memory usage every 30 seconds
    const memoryInterval = setInterval(trackMemoryUsage, 30000);

    // Error tracking
    const handleError = (event: ErrorEvent) => {
      track('javascript_error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      track('unhandled_promise_rejection', {
        reason: event.reason?.toString() || 'Unknown promise rejection'
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('load', trackWebVitals);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      clearInterval(memoryInterval);
    };
  }, [track]);

  // This component doesn't render anything
  return null;
};

export default PerformanceMonitor;