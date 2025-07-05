
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface ModalsProps {
  showExitIntent: boolean;
  showLeadMagnet: boolean;
  setShowExitIntent: (show: boolean) => void;
  setShowLeadMagnet: (show: boolean) => void;
}

const Modals: React.FC<ModalsProps> = ({
  showExitIntent,
  showLeadMagnet,
  setShowExitIntent,
  setShowLeadMagnet
}) => {
  const { toast } = useToast();

  const handleLeadMagnetDownload = () => {
    setShowLeadMagnet(false);
    toast({
      title: "Download Starting",
      description: "Your free migration checklist is being prepared!",
    });
  };

  return (
    <>
      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-card text-card-foreground rounded-lg p-6 max-w-md w-full shadow-elegant">
            <h3 className="text-xl font-bold mb-4">Wait! Don't Miss Out</h3>
          <p className="text-muted-foreground mb-4">
              Get our free migration checklist before you go - it includes step-by-step instructions and expert tips!
            </p>
            <div className="flex gap-3">
              <Button onClick={() => setShowLeadMagnet(true)} className="flex-1" aria-label="Get free migration checklist">
                Get Free Checklist
              </Button>
              <Button variant="outline" onClick={() => setShowExitIntent(false)} aria-label="Close exit intent modal">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Lead Magnet Modal */}
      {showLeadMagnet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-card text-card-foreground rounded-lg p-6 max-w-md w-full shadow-elegant">
            <h3 className="text-xl font-bold mb-4">Free Migration Checklist</h3>
            <p className="text-muted-foreground mb-4">
              Get our comprehensive 25-point migration checklist used by over 10,000 successful migrations.
            </p>
            <div className="space-y-3 mb-4">
              <Input placeholder="Your Email Address" type="email" />
              <Input placeholder="Your Name" />
            </div>
            <div className="flex gap-3">
              <Button onClick={handleLeadMagnetDownload} className="flex-1" aria-label="Download free migration guide PDF">
                <Download className="w-4 h-4 mr-2" />
                Download Free PDF
              </Button>
              <Button variant="outline" onClick={() => setShowLeadMagnet(false)} aria-label="Close lead magnet modal">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
