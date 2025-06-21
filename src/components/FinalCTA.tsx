
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
    <Card className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Save ${totalSavings}/Year?</h2>
        <p className="text-xl mb-6 text-blue-100">
          Join over 100,000 websites that have migrated to Cloudways
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            onClick={() => window.open(affiliateLink, '_blank')}
          >
            Start Your Free Migration
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
            onClick={onShowLeadMagnet}
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
