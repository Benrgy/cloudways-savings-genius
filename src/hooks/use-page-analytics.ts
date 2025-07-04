import { useEffect } from 'react';
import { useAnalytics } from '@/lib/analytics';

// Hook to track page views and time on page
export const usePageAnalytics = (pageName: string) => {
  const { track, trackTimeOnPage } = useAnalytics();

  useEffect(() => {
    const startTime = Date.now();
    
    // Track page view
    track('page_view', {
      pageName,
      timestamp: startTime
    });

    // Track time on page when component unmounts
    return () => {
      const timeSpent = Date.now() - startTime;
      trackTimeOnPage(timeSpent);
    };
  }, [pageName, track, trackTimeOnPage]);
};

// Hook to track scroll depth
export const useScrollAnalytics = () => {
  const { track } = useAnalytics();

  useEffect(() => {
    let maxScrollDepth = 0;
    let hasTracked25 = false;
    let hasTracked50 = false;
    let hasTracked75 = false;
    let hasTracked100 = false;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
      }

      // Track milestone percentages
      if (scrollPercent >= 25 && !hasTracked25) {
        hasTracked25 = true;
        track('scroll_depth', { percentage: 25 });
      }
      if (scrollPercent >= 50 && !hasTracked50) {
        hasTracked50 = true;
        track('scroll_depth', { percentage: 50 });
      }
      if (scrollPercent >= 75 && !hasTracked75) {
        hasTracked75 = true;
        track('scroll_depth', { percentage: 75 });
      }
      if (scrollPercent >= 100 && !hasTracked100) {
        hasTracked100 = true;
        track('scroll_depth', { percentage: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Track final scroll depth
      track('session_scroll_depth', { maxDepth: maxScrollDepth });
    };
  }, [track]);
};