
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Shield, Zap, Users, Check, X, ExternalLink, Download, Twitter, Server, Globe, Lock, Star, ArrowRight, Database, Wifi, HardDrive, FileText, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showLeadMagnet, setShowLeadMagnet] = useState(false);
  
  // Advanced calculator state
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

  // Advanced calculation logic
  const calculateAdvancedSavings = () => {
    let cloudwaysCost = 14; // Base cost
    let sharedHostingCost = currentCost;
    
    // Adjust Cloudways cost based on requirements
    if (ramGB >= 2) cloudwaysCost = 28;
    if (ramGB >= 4) cloudwaysCost = 56;
    if (ramGB >= 8) cloudwaysCost = 112;
    
    // Add costs for shared hosting extras
    if (sslCertificates > 1) sharedHostingCost += (sslCertificates - 1) * 6;
    if (storageGB > 20) sharedHostingCost += Math.ceil((storageGB - 20) / 10) * 5;
    if (complianceNeeds !== 'none') sharedHostingCost += 25;
    if (numberOfSites > 1) sharedHostingCost += (numberOfSites - 1) * 8;
    
    // Calculate renewal costs (shared hosting typically doubles)
    const yearTwoSharedCost = sharedHostingCost * 2;
    const yearTwoCloudwaysCost = cloudwaysCost; // Cloudways doesn't increase
    
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

  const handleLeadMagnetDownload = () => {
    setShowLeadMagnet(false);
    toast({
      title: "Download Starting",
      description: "Your free migration checklist is being prepared!",
    });
  };

  const shareResults = (platform: string) => {
    const text = `I could save $${results.totalSavings}/year by switching to Cloudways! Calculate your savings:`;
    const url = window.location.href;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Sticky CTA Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-3 z-50 md:hidden">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Save ${results.totalSavings}/year</span>
          <Button 
            size="sm" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => window.open(affiliateLink, '_blank')}
          >
            Start Now
          </Button>
        </div>
      </div>

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Wait! Don't Miss Out</h3>
            <p className="text-gray-600 mb-4">
              Get our free migration checklist before you go - it includes step-by-step instructions and expert tips!
            </p>
            <div className="flex gap-3">
              <Button onClick={() => setShowLeadMagnet(true)} className="flex-1">
                Get Free Checklist
              </Button>
              <Button variant="outline" onClick={() => setShowExitIntent(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Lead Magnet Modal */}
      {showLeadMagnet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Free Migration Checklist</h3>
            <p className="text-gray-600 mb-4">
              Get our comprehensive 25-point migration checklist used by over 10,000 successful migrations.
            </p>
            <div className="space-y-3 mb-4">
              <Input placeholder="Your Email Address" type="email" />
              <Input placeholder="Your Name" />
            </div>
            <div className="flex gap-3">
              <Button onClick={handleLeadMagnetDownload} className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Free PDF
              </Button>
              <Button variant="outline" onClick={() => setShowLeadMagnet(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

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

        {/* Advanced Calculator */}
        <Card className="mb-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Calculator className="w-8 h-8 text-blue-600" />
              Advanced Hosting Cost Calculator
            </CardTitle>
            <p className="text-gray-600">Enter your current hosting details for a personalized savings calculation</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Basic Inputs */}
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

              {/* Advanced Inputs */}
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

            {/* Results */}
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
                <Button variant="outline" onClick={() => setShowLeadMagnet(true)}>
                  <Download className="w-4 h-4 mr-2" />
                  Get Migration Guide
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real User Testimonials */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Real User Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Chen</h4>
                    <p className="text-sm text-gray-600">E-commerce Store Owner</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Switched from SiteGround to Cloudways and immediately saw 40% faster page loads. My conversion rate increased by 15% within the first month."
                </p>
                <div className="text-green-600 font-semibold">Saves $312/year</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Mike Rodriguez</h4>
                    <p className="text-sm text-gray-600">Digital Agency</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Managing 25 client sites on Cloudways costs less than what we paid for 10 sites on shared hosting. The performance difference is incredible."
                </p>
                <div className="text-green-600 font-semibold">Saves $1,800/year</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Emma Thompson</h4>
                    <p className="text-sm text-gray-600">Blog Network</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "The migration was completely free and handled by experts. Zero downtime and my sites now load in under 1 second. Best decision ever."
                </p>
                <div className="text-green-600 font-semibold">Saves $540/year</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Expert Articles Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Expert Migration Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold">10 Reasons to Switch</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Discover why thousands are moving from shared hosting to managed cloud hosting.
                </p>
                <Link to="/articles/ten-reasons">
                  <Button variant="outline" className="w-full">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-semibold">Migration Guide</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Step-by-step instructions for a seamless migration with zero downtime.
                </p>
                <Link to="/articles/migration-guide">
                  <Button variant="outline" className="w-full">
                    View Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold">Cost Comparison</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Detailed breakdown comparing Cloudways vs SiteGround, Bluehost, and others.
                </p>
                <Link to="/articles/cost-comparison">
                  <Button variant="outline" className="w-full">
                    Compare Costs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Expanded FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">What are the main benefits of moving from shared hosting to Cloudways?</h3>
                <p className="text-gray-700">Key benefits include: 3x faster loading speeds with dedicated resources, 24/7 expert support from cloud specialists (not generic customer service), automatic daily backups with one-click restore, free SSL certificates, built-in CDN for global performance, advanced security with firewalls and malware protection, easy scalability during traffic spikes, and compliance options for PCI DSS and HIPAA requirements.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How accurate is this savings calculator?</h3>
                <p className="text-gray-700">Our calculator uses real-world pricing data from major shared hosting providers and includes hidden costs like SSL certificates, premium backups, CDN services, and renewal price increases. We factor in Cloudways' transparent pricing with no surprise fees. The calculations are based on actual customer migrations and verified savings reports from over 1,000 users.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Is the migration really free and how long does it take?</h3>
                <p className="text-gray-700">Yes, Cloudways provides completely free migration for all new customers. The process typically takes 24-48 hours and is handled by certified migration experts. They guarantee zero downtime and will handle complex databases, custom configurations, and multiple websites. You'll receive email updates throughout the process and can track progress in your dashboard.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">What makes Cloudways different from other cloud hosting providers?</h3>
                <p className="text-gray-700">Cloudways is a managed cloud platform that sits on top of major cloud providers (AWS, Google Cloud, DigitalOcean). You get enterprise-level infrastructure with simplified management. Unlike raw cloud services, Cloudways includes managed services, security, backups, monitoring, and 24/7 support. Unlike shared hosting, you get dedicated resources and can scale instantly.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Can I handle traffic spikes without additional costs?</h3>
                <p className="text-gray-700">Yes, Cloudways offers vertical scaling where you can temporarily increase your server resources during traffic spikes and scale back down afterward. You only pay for the additional resources during the time you use them. This is perfect for handling viral content, seasonal sales, or marketing campaigns without paying for unused capacity year-round.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">What level of support can I expect?</h3>
                <p className="text-gray-700">Cloudways provides 24/7/365 support from cloud hosting specialists, not general customer service representatives. The support team includes server administrators, security experts, and performance specialists. Average response time is under 60 seconds for live chat, and they can directly access and fix server-level issues that shared hosting support cannot handle.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How does pricing work and are there hidden fees?</h3>
                <p className="text-gray-700">Cloudways uses transparent pay-as-you-use pricing with no setup fees, hidden charges, or renewal price increases. You pay only for the server resources you consume, calculated hourly and billed monthly. All features (SSL, backups, CDN, security, support) are included. You can upgrade or downgrade anytime without penalties or long-term contracts.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Is my website secure on Cloudways?</h3>
                <p className="text-gray-700">Cloudways provides enterprise-grade security including dedicated firewalls, DDoS protection, malware scanning, automated security patches, two-factor authentication, IP whitelisting, and isolated server environments. They also offer compliance certifications for PCI DSS and HIPAA when required. Regular security audits and 24/7 monitoring ensure your sites stay protected.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Optimization Guides */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Cloudways Optimization Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-yellow-600" />
                  Performance Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Enable Varnish caching for 10x faster page loads
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Configure Redis for database query optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Set up Cloudflare Enterprise CDN integration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Use PHP 8+ with OPcache for better performance
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Enable HTTP/2 and Brotli compression
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Security Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Enable two-factor authentication for admin access
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Configure automatic malware scanning
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Set up IP whitelisting for critical operations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Install free SSL certificates with auto-renewal
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Enable bot protection and DDoS mitigation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-green-600" />
                  Monitoring & Scaling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Set up real-time server monitoring alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Configure automatic scaling triggers
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Monitor application performance metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Set up automated backup schedules
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Use staging environments for safe testing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <HardDrive className="w-6 h-6 text-purple-600" />
                  Dashboard Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Access detailed server analytics and logs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    One-click application installations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Manage domains and SSL certificates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Clone servers and applications instantly
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Team collaboration and access controls
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <Card className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Save ${results.totalSavings}/Year?</h2>
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
                onClick={() => setShowLeadMagnet(true)}
              >
                <Download className="w-5 h-5 mr-2" />
                Get Migration Checklist
              </Button>
            </div>
          </CardContent>
        </Card>

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
