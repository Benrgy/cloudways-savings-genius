// Simple analytics utility for tracking user interactions and conversions
// Can be extended with Google Analytics, Mixpanel, or other analytics services

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeSession();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeSession() {
    this.track('session_start', {
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      url: window.location.href
    });
  }

  track(event: string, properties?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties: {
        ...properties,
        sessionId: this.sessionId,
        timestamp: Date.now(),
        url: window.location.href
      },
      timestamp: Date.now()
    };

    this.events.push(analyticsEvent);
    
    // Log to console in development
    if (import.meta.env.MODE === 'development') {
      console.log('📊 Analytics Event:', analyticsEvent);
    }

    // In production, you would send this to your analytics service
    // Example: sendToAnalyticsService(analyticsEvent);
  }

  // Calculator specific tracking
  trackCalculatorUsage(data: {
    currentProvider?: string;
    currentPlan?: string;
    monthlyUsers?: number;
    currentCost?: number;
    recommendedPlan?: string;
    potentialSavings?: number;
  }) {
    this.track('calculator_used', {
      ...data,
      calculationStep: 'complete'
    });
  }

  trackCTAClick(ctaType: 'primary' | 'secondary' | 'sticky' | 'exit_intent', context?: string) {
    this.track('cta_clicked', {
      ctaType,
      context,
      conversionValue: 'high_intent'
    });
  }

  trackLeadMagnetShown(trigger: 'calculation_complete' | 'exit_intent' | 'manual') {
    this.track('lead_magnet_shown', {
      trigger,
      conversionOpportunity: true
    });
  }

  trackArticleView(articleTitle: string) {
    this.track('article_viewed', {
      articleTitle,
      contentEngagement: true
    });
  }

  trackTimeOnPage(duration: number) {
    this.track('time_on_page', {
      duration,
      engagement: duration > 30000 ? 'high' : duration > 10000 ? 'medium' : 'low'
    });
  }

  // Get analytics summary for debugging
  getEventsSummary() {
    return {
      totalEvents: this.events.length,
      sessionId: this.sessionId,
      recentEvents: this.events.slice(-5),
      conversionEvents: this.events.filter(e => 
        ['cta_clicked', 'calculator_used', 'lead_magnet_shown'].includes(e.event)
      )
    };
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Export hook for React components
export const useAnalytics = () => {
  return {
    track: analytics.track.bind(analytics),
    trackCalculatorUsage: analytics.trackCalculatorUsage.bind(analytics),
    trackCTAClick: analytics.trackCTAClick.bind(analytics),
    trackLeadMagnetShown: analytics.trackLeadMagnetShown.bind(analytics),
    trackArticleView: analytics.trackArticleView.bind(analytics),
    trackTimeOnPage: analytics.trackTimeOnPage.bind(analytics),
    getEventsSummary: analytics.getEventsSummary.bind(analytics)
  };
};