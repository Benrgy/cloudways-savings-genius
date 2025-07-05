
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FinalCtaProps {
  totalSavings: number;
  onShowLeadMagnet: () => void;
}

const FinalCTA: React.FC<FinalCtaProps> = ({ totalSavings, onShowLeadMagnet }) => {
  const affiliateLink = "https://www.cloudways.com/en/?id=1384181&utm_source=calculator&utm_medium=main&utm_campaign=savings";

  return (
    <Card className="text-center gradient-hero text-white shadow-glow">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Save ${totalSavings}/Year?</h2>
        <p className="text-xl mb-6 text-white/80">
          Join over 100,000 websites that have migrated to Cloudways
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-background text-primary hover:bg-muted text-lg px-8 py-3 transition-smooth"
            onClick={() => window.open(affiliateLink, '_blank')}
            aria-label="Start your free Cloudways migration now"
          >
            Start Your Free Migration
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 transition-smooth"
            onClick={onShowLeadMagnet}
            aria-label="Get free migration checklist PDF"
          >
            <Download className="w-5 h-5 mr-2" />
            Get Migration Checklist
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinalCTA;
