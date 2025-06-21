
import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, ArrowRight, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CalculatorProps {
  onShowLeadMagnet: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onShowLeadMagnet }) => {
  const [currentCost, setCurrentCost] = useState(12);
  const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
  const [storageGB, setStorageGB] = useState(10);
  const [bandwidthGB, setBandwidthGB] = useState(100);
  const [numberOfSites, setNumberOfSites] = useState(1);
  const [ramGB, setRamGB] = useState(1);
  const [sslCertificates, setSslCertificates] = useState(1);
  const [backupFrequency, setBackupFrequency] = useState('daily');
  const [complianceNeeds, setComplianceNeeds] = useState('none');
  const [currentProvider, setCurrentProvider] = useState('bluehost');
  const [region, setRegion] = useState('us');
  
  const [results, setResults] = useState({
    cloudwaysCost: 0,
    totalSavings: 0,
    performanceGain: 0,
    recommendedPlan: ''
  });

  const affiliateLink = "https://www.cloudways.com/en/?id=1384181&utm_source=calculator&utm_medium=main&utm_campaign=savings";

  const calculateAdvancedSavings = () => {
    let cloudwaysCost = 14;
    let sharedHostingCost = currentCost;
    
    if (ramGB >= 2) cloudwaysCost = 28;
    if (ramGB >= 4) cloudwaysCost = 56;
    if (ramGB >= 8) cloudwaysCost = 112;
    
    if (sslCertificates > 1) sharedHostingCost += (sslCertificates - 1) * 6;
    if (storageGB > 20) sharedHostingCost += Math.ceil((storageGB - 20) / 10) * 5;
    if (complianceNeeds !== 'none') sharedHostingCost += 25;
    if (numberOfSites > 1) sharedHostingCost += (numberOfSites - 1) * 8;
    
    const yearTwoSharedCost = sharedHostingCost * 2;
    const yearTwoCloudwaysCost = cloudwaysCost;
    
    const totalSavings = (yearTwoSharedCost - yearTwoCloudwaysCost) * 12;
    const performanceGain = Math.round(((monthlyVisitors / 1000) * 2.5));
    
    let recommendedPlan = 'DigitalOcean 1GB';
    if (ramGB >= 2) recommendedPlan = 'DigitalOcean 2GB';
    if (ramGB >= 4) recommendedPlan = 'AWS 4GB';
    if (ramGB >= 8) recommendedPlan = 'Google Cloud 8GB';
    
    setResults({
      cloudwaysCost: cloudwaysCost,
      totalSavings: Math.max(totalSavings, 0),
      performanceGain: performanceGain,
      recommendedPlan: recommendedPlan
    });
  };

  useEffect(() => {
    calculateAdvancedSavings();
  }, [currentCost, monthlyVisitors, storageGB, bandwidthGB, numberOfSites, ramGB, sslCertificates, backupFrequency, complianceNeeds, currentProvider]);

  const shareResults = (platform: string) => {
    const text = `I could save $${results.totalSavings}/year by switching to Cloudways! Calculate your savings:`;
    const url = window.location.href;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <Card className="mb-12 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          <CalculatorIcon className="w-8 h-8 text-blue-600" />
          Advanced Hosting Cost Calculator
        </CardTitle>
        <p className="text-gray-600">Enter your current hosting details for a personalized savings calculation</p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="space-y-2">
            <Label htmlFor="current-cost">Current Monthly Cost ($)</Label>
            <Input
              id="current-cost"
              type="number"
              value={currentCost}
              onChange={(e) => setCurrentCost(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="visitors">Monthly Visitors</Label>
            <Select value={monthlyVisitors.toString()} onValueChange={(value) => setMonthlyVisitors(Number(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5000">5,000</SelectItem>
                <SelectItem value="10000">10,000</SelectItem>
                <SelectItem value="25000">25,000</SelectItem>
                <SelectItem value="50000">50,000</SelectItem>
                <SelectItem value="100000">100,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="provider">Current Provider</Label>
            <Select value={currentProvider} onValueChange={setCurrentProvider}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bluehost">Bluehost</SelectItem>
                <SelectItem value="siteground">SiteGround</SelectItem>
                <SelectItem value="hostgator">HostGator</SelectItem>
                <SelectItem value="godaddy">GoDaddy</SelectItem>
                <SelectItem value="other">Other Shared Host</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="storage">Storage Needed (GB)</Label>
            <Input
              id="storage"
              type="number"
              value={storageGB}
              onChange={(e) => setStorageGB(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bandwidth">Monthly Bandwidth (GB)</Label>
            <Input
              id="bandwidth"
              type="number"
              value={bandwidthGB}
              onChange={(e) => setBandwidthGB(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sites">Number of Websites</Label>
            <Input
              id="sites"
              type="number"
              value={numberOfSites}
              onChange={(e) => setNumberOfSites(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ram">RAM Requirements (GB)</Label>
            <Select value={ramGB.toString()} onValueChange={(value) => setRamGB(Number(value))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 GB</SelectItem>
                <SelectItem value="2">2 GB</SelectItem>
                <SelectItem value="4">4 GB</SelectItem>
                <SelectItem value="8">8 GB</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ssl">SSL Certificates Needed</Label>
            <Input
              id="ssl"
              type="number"
              value={sslCertificates}
              onChange={(e) => setSslCertificates(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="compliance">Compliance Requirements</Label>
            <Select value={complianceNeeds} onValueChange={setComplianceNeeds}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="pci">PCI DSS</SelectItem>
                <SelectItem value="hipaa">HIPAA</SelectItem>
                <SelectItem value="both">PCI + HIPAA</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Personalized Results</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">${results.cloudwaysCost}/mo</div>
              <div className="text-sm text-gray-600">Cloudways Cost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">${results.totalSavings}/year</div>
              <div className="text-sm text-gray-600">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{results.performanceGain}%</div>
              <div className="text-sm text-gray-600">Speed Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-gray-900">{results.recommendedPlan}</div>
              <div className="text-sm text-gray-600">Recommended Plan</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open(affiliateLink, '_blank')}
            >
              Start Your Migration
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" onClick={() => shareResults('twitter')}>
              <Twitter className="w-4 h-4 mr-2" />
              Share Results
            </Button>
            <Button variant="outline" onClick={onShowLeadMagnet}>
              <Download className="w-4 h-4 mr-2" />
              Get Migration Guide
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;
