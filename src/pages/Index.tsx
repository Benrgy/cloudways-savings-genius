
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import CalculatorComponent from '@/components/Calculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import EnhancedFAQ from '@/components/EnhancedFAQ';
import ExpertArticles from '@/components/ExpertArticles';
import PerformanceGuides from '@/components/PerformanceGuides';
import StickyCTA from '@/components/StickyCTA';
import FinalCTA from '@/components/FinalCTA';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import ProviderComparison from '@/components/ProviderComparison';
import ProviderComparisonLinks from '@/components/ProviderComparisonLinks';
import CostVisualization from '@/components/CostVisualization';
import MigrationTimeline from '@/components/MigrationTimeline';
import ROICalculator from '@/components/ROICalculator';
import { usePageAnalytics, useScrollAnalytics } from '@/hooks/use-page-analytics';

const Index = () => {
  const [totalSavings, setTotalSavings] = useState(0);
  const [cloudwaysCost, setCloudwaysCost] = useState(14);
  const [providerCost, setProviderCost] = useState(12);
  
  // Analytics tracking
  usePageAnalytics('homepage');
  useScrollAnalytics();

  return (
    <>
      <PerformanceMonitor />
      <div className="min-h-screen gradient-subtle">
      <StickyCTA totalSavings={totalSavings} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
            Cut Cloud Hosting Costs by 40% Today
          </h1>
          <p className="text-xl text-muted-foreground mb-6 animate-fade-in">
            Join 50,000+ businesses saving thousands with our proven Cloudways calculator. Get instant estimates and migration guide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <Badge variant="secondary" className="px-3 py-1 shadow-elegant transition-smooth hover:shadow-glow">
              <Check className="w-4 h-4 mr-1" />
              Free Migration
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 shadow-elegant transition-smooth hover:shadow-glow">
              <Shield className="w-4 h-4 mr-1" />
              24/7 Expert Support
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 shadow-elegant transition-smooth hover:shadow-glow">
              <Zap className="w-4 h-4 mr-1" />
              3x Faster Performance
            </Badge>
          </div>
        </header>

        <CalculatorComponent 
          onShowLeadMagnet={() => {}}
          onSavingsChange={setTotalSavings}
        />
        
        <CostVisualization 
          cloudwaysCost={cloudwaysCost}
          currentProviderCost={providerCost}
          providerName="Your Current Provider"
        />

        <ProviderComparison />

        <ProviderComparisonLinks />

        <ROICalculator />

        <MigrationTimeline />
        
        <Testimonials />

        <ExpertArticles />

        <EnhancedFAQ />

        <PerformanceGuides />

        <FinalCTA 
          totalSavings={totalSavings}
          onShowLeadMagnet={() => {}}
        />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link to="/articles/ten-reasons" className="hover:text-primary transition-smooth">10 Reasons to Switch</Link>
            <Link to="/articles/migration-guide" className="hover:text-primary transition-smooth">Migration Guide</Link>
            <Link to="/articles/cost-comparison" className="hover:text-primary transition-smooth">Cost Comparison</Link>
          </div>
          <p className="mb-2">
            <strong>Affiliate Disclosure:</strong> This site contains affiliate links to Cloudways. 
            We may earn a commission when you sign up through our links, at no additional cost to you. 
            This helps us maintain and improve our free calculator and resources.
          </p>
          <p>&copy; 2025 Cloudways Savings Calculator. All calculations based on published pricing as of January 2025.</p>
        </footer>
      </div>
    </div>
    </>
  );
};

export default Index;
