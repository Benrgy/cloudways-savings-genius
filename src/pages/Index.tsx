
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator as CalculatorIcon, Shield, Zap, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import CalculatorComponent from '@/components/Calculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ExpertArticles from '@/components/ExpertArticles';
import PerformanceGuides from '@/components/PerformanceGuides';
import Modals from '@/components/Modals';
import StickyCTA from '@/components/StickyCTA';
import FinalCTA from '@/components/FinalCTA';

const Index = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  const [totalSavings, setTotalSavings] = useState(0);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <StickyCTA totalSavings={totalSavings} />

      <Modals
        showExitIntent={showExitIntent}
        showLeadMagnet={showLeadMagnet}
        setShowExitIntent={setShowExitIntent}
        setShowLeadMagnet={setShowLeadMagnet}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Cloudways Savings Calculator 2025
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Calculate exact savings by migrating from shared hosting to Cloudways managed cloud hosting
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-3 py-1">
              <Check className="w-4 h-4 mr-1" />
              Free Migration
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Shield className="w-4 h-4 mr-1" />
              24/7 Expert Support
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Zap className="w-4 h-4 mr-1" />
              3x Faster Performance
            </Badge>
          </div>
        </header>

        <CalculatorComponent 
          onShowLeadMagnet={() => setShowLeadMagnet(true)}
          onSavingsChange={setTotalSavings}
        />
        
        <Testimonials />

        <ExpertArticles />

        <FAQ />

        <PerformanceGuides />

        <FinalCTA 
          totalSavings={totalSavings}
          onShowLeadMagnet={() => setShowLeadMagnet(true)}
        />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link to="/articles/ten-reasons" className="hover:text-blue-600">10 Reasons to Switch</Link>
            <Link to="/articles/migration-guide" className="hover:text-blue-600">Migration Guide</Link>
            <Link to="/articles/cost-comparison" className="hover:text-blue-600">Cost Comparison</Link>
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
  );
};

export default Index;
