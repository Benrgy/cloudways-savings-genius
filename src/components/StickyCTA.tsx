
import React from 'react';
import { Button } from '@/components/ui/button';

interface StickyCtaProps {
  totalSavings: number;
}

const StickyCTA: React.FC<StickyCtaProps> = ({ totalSavings }) => {
  const affiliateLink = "https://www.cloudways.com/en/?id=1384181&utm_source=calculator&utm_medium=main&utm_campaign=savings";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-3 z-50 md:hidden shadow-elegant">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Save ${totalSavings}/year</span>
        <Button 
          size="sm" 
          className="bg-background text-primary hover:bg-muted transition-smooth"
          onClick={() => window.open(affiliateLink, '_blank')}
        >
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
