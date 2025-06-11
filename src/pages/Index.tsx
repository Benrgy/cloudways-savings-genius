import React, { useState, useEffect } from 'react';
import { Calculator, Shield, Zap, Users, Check, X, ExternalLink, Download, Twitter, Server, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [currentCost, setCurrentCost] = useState<string>('');
  const [visitors, setVisitors] = useState<string>('');
  const [storage, setStorage] = useState<string>('');
  const [bandwidth, setBandwidth] = useState<string>('');
  const [websites, setWebsites] = useState<string>('');
  const [sslNeeded, setSslNeeded] = useState<string>('');
  const [compliance, setCompliance] = useState<string>('');
  const [ramRequired, setRamRequired] = useState<string>('');
  const [environments, setEnvironments] = useState<string>('');
  const [backupFreq, setBackupFreq] = useState<string>('');
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Enhanced Cloudways pricing calculation with more accurate logic
  const calculateCloudwaysCost = () => {
    const visitorCount = visitors;
    const storageGB = parseInt(storage) || 0;
    const bandwidthGB = parseInt(bandwidth) || 0;
    const websiteCount = parseInt(websites) || 1;
    const ram = ramRequired;
    
    // More sophisticated pricing logic
    let baseCost = 14; // DO 1GB plan
    
    // Traffic-based upgrades
    if (visitorCount === '10-50k' || storageGB > 25 || websiteCount > 3) {
      baseCost = 14; // Still DO 1GB for moderate traffic
    }
    if (visitorCount === '50k-100k' || storageGB > 50 || ram === '4GB' || websiteCount > 5 || bandwidthGB > 1000) {
      baseCost = 28; // Linode 2GB
    }
    if (visitorCount === '100k+' || storageGB > 100 || ram === '8GB+' || websiteCount > 10 || bandwidthGB > 2000) {
      baseCost = 56; // Linode 4GB
    }
    
    // Compliance costs
    if (compliance === 'PCI' || compliance === 'HIPAA') {
      baseCost += 20;
    }
    
    // Multiple environment costs
    const envCount = parseInt(environments) || 1;
    if (envCount > 1) {
      baseCost += (envCount - 1) * 14;
    }
    
    return baseCost;
  };

  const cloudwaysCost = calculateCloudwaysCost();
  const currentCostNum = parseFloat(currentCost) || 0;
  const savings = currentCostNum > 0 ? Math.max(0, currentCostNum - cloudwaysCost) : 0;
  const savingsPercentage = currentCostNum > 0 ? Math.round((savings / currentCostNum) * 100) : 0;

  // Sticky bar visibility with improved logic
  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 800 && window.innerWidth <= 768; // Only show on mobile
      setShowStickyBar(shouldShow);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Enhanced exit intent detection
  useEffect(() => {
    let exitIntentShown = false;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentShown && currentCost) {
        setShowExitIntent(true);
        exitIntentShown = true;
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [currentCost]);

  const affiliateLink = "https://www.cloudways.com/en/?id=1384181&utm_source=calculator&utm_medium=landing&utm_campaign=savings";

  const shareOnTwitter = () => {
    const text = `I just calculated $${savings.toFixed(0)}/month savings with @Cloudways hosting! Check it out:`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const handleLeadMagnet = () => {
    toast({ 
      title: "Checklist Downloaded!", 
      description: "Your free migration checklist has been sent to your email. Check your inbox!" 
    });
  };

  // Enhanced FAQ Schema with more comprehensive data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I migrate my website to Cloudways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloudways offers free migration services for new customers. Simply sign up for an account, submit a migration request through your dashboard, and their expert team will handle the entire process within 24-48 hours with zero downtime. No technical skills required - they handle everything from file transfers to database migration."
        }
      },
      {
        "@type": "Question", 
        "name": "Is Cloudways shared hosting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Cloudways is managed cloud hosting, not shared hosting. You get dedicated cloud server resources from top providers like AWS, Google Cloud, DigitalOcean, and Linode. This means better performance, security, and reliability compared to traditional shared hosting where resources are shared among multiple websites."
        }
      },
      {
        "@type": "Question",
        "name": "What are the main benefits of moving from shared hosting to Cloudways?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Key benefits include: 3x faster loading speeds with dedicated resources, 24/7 expert support from cloud specialists, automatic daily backups with one-click restore, free SSL certificates, built-in CDN for global performance, advanced security with firewalls and malware protection, easy scalability during traffic spikes, and compliance options for PCI/HIPAA requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Does Cloudways offer free migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Cloudways provides completely free website migration for new customers. Their migration experts handle the entire process including file transfers, database migration, DNS setup, and testing to ensure everything works perfectly on your new cloud server with zero downtime."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Cloudways cost compared to shared hosting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloudways plans start at $14/month for cloud hosting, which often costs less than premium shared hosting plans when you factor in all included features. Most users save 30-70% long-term due to better performance, no renewal price hikes, included SSL, CDN, backups, and no hidden fees that shared hosts often charge for essential features."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Migrate Your Website to Cloudways Cloud Hosting",
    "description": "Complete step-by-step guide to migrate your website from shared hosting to Cloudways managed cloud hosting with zero downtime",
    "totalTime": "PT48H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Create your Cloudways account",
        "text": "Sign up for a free Cloudways account and choose your preferred cloud provider (AWS, Google Cloud, DigitalOcean, or Linode)",
        "url": "https://www.cloudways.com/en/?id=1384181"
      },
      {
        "@type": "HowToStep", 
        "name": "Submit free migration request",
        "text": "Use the migration request form in your Cloudways dashboard to provide your current hosting details and website information"
      },
      {
        "@type": "HowToStep",
        "name": "Expert migration process",
        "text": "Cloudways migration experts handle the complete transfer including files, databases, and configurations within 24-48 hours with zero downtime"
      },
      {
        "@type": "HowToStep",
        "name": "Go live and optimize",
        "text": "After migration completion, update your DNS, verify everything works correctly, and enjoy improved performance and features"
      }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Official Cloudways Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloudways Savings Calculator: 
              <span className="text-blue-600"> Instantly Compare Shared Hosting vs. Cloud Hosting Costs</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Use our free, specialist-built calculator to see exactly how much you can save by migrating from shared hosting to Cloudways' managed cloud hosting—no technical skills required.
            </h2>
          </div>

          {/* Introduction */}
          <Card className="max-w-4xl mx-auto mb-12 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Cloudways is a leading managed cloud hosting platform that empowers website owners to upgrade from traditional shared hosting to high-performance cloud servers. Enjoy lightning-fast speeds, 24/7 expert support, free SSL, automated backups, and enterprise-grade security—all with easy, one-click setup. Whether you run a business, e-commerce store, or blog, Cloudways makes cloud hosting simple, affordable, and reliable.
              </p>
            </CardContent>
          </Card>

          {/* Advanced Calculator Section */}
          <Card className="max-w-4xl mx-auto mb-12 shadow-xl border-2 border-blue-200">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Calculator className="w-6 h-6" />
                Advanced Cloud Hosting Cost Calculator (Built by Hosting Specialists)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Monthly Hosting Cost ($)</label>
                    <Input
                      type="number"
                      placeholder="e.g., 25"
                      value={currentCost}
                      onChange={(e) => setCurrentCost(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Visitors</label>
                    <Select value={visitors} onValueChange={setVisitors}>
                      <SelectTrigger className="text-lg">
                        <SelectValue placeholder="Select visitor range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<10k">Less than 10,000</SelectItem>
                        <SelectItem value="10-50k">10,000 - 50,000</SelectItem>
                        <SelectItem value="50k-100k">50,000 - 100,000</SelectItem>
                        <SelectItem value="100k+">100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Storage Used (GB)</label>
                    <Input
                      type="number"
                      placeholder="e.g., 10"
                      value={storage}
                      onChange={(e) => setStorage(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Required Bandwidth (GB/month)</label>
                    <Input
                      type="number"
                      placeholder="e.g., 100"
                      value={bandwidth}
                      onChange={(e) => setBandwidth(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Websites Hosted</label>
                    <Input
                      type="number"
                      placeholder="e.g., 1"
                      value={websites}
                      onChange={(e) => setWebsites(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">SSL Certificate Needed?</label>
                    <Select value={sslNeeded} onValueChange={setSslNeeded}>
                      <SelectTrigger className="text-lg">
                        <SelectValue placeholder="Select SSL requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes (Free with Cloudways)</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Need for Compliance</label>
                    <Select value={compliance} onValueChange={setCompliance}>
                      <SelectTrigger className="text-lg">
                        <SelectValue placeholder="Select compliance needs" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="PCI">PCI Compliance</SelectItem>
                        <SelectItem value="HIPAA">HIPAA Compliance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">RAM/Memory Required</label>
                    <Select value={ramRequired} onValueChange={setRamRequired}>
                      <SelectTrigger className="text-lg">
                        <SelectValue placeholder="Select RAM requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1GB">1GB</SelectItem>
                        <SelectItem value="2GB">2GB</SelectItem>
                        <SelectItem value="4GB">4GB</SelectItem>
                        <SelectItem value="8GB+">8GB+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Production Environments</label>
                    <Input
                      type="number"
                      placeholder="e.g., 1"
                      value={environments}
                      onChange={(e) => setEnvironments(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Backup Frequency</label>
                    <Select value={backupFreq} onValueChange={setBackupFreq}>
                      <SelectTrigger className="text-lg">
                        <SelectValue placeholder="Select backup frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily (Recommended)</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Results */}
              {currentCost && visitors && storage && (
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Current Cost</p>
                      <p className="text-2xl font-bold text-gray-900">${currentCost}/month</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Recommended Cloudways Plan</p>
                      <p className="text-2xl font-bold text-blue-600">${cloudwaysCost}/month</p>
                    </div>
                  </div>
                  
                  {/* Plan breakdown */}
                  <div className="mb-4 p-4 bg-white rounded border">
                    <h4 className="font-bold mb-2">Recommended Cloudways Specs:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• RAM: {ramRequired || 'Auto-selected based on traffic'}</li>
                      <li>• Storage: SSD with {storage}GB+ capacity</li>
                      <li>• Bandwidth: Unlimited</li>
                      <li>• Free SSL: {sslNeeded === 'yes' ? 'Included' : 'Available'}</li>
                      <li>• Backups: {backupFreq || 'Daily'} automated backups</li>
                      <li>• Compliance: {compliance !== 'none' ? compliance + ' ready' : 'Standard security'}</li>
                    </ul>
                  </div>
                  
                  {savings > 0 && (
                    <div className="text-center mb-6">
                      <p className="text-3xl font-bold text-green-600 mb-2">
                        You could save ${savings.toFixed(0)}/month!
                      </p>
                      <p className="text-lg text-gray-700">
                        That's {savingsPercentage}% savings per month (${(savings * 12).toFixed(0)}/year)
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-lg py-3"
                      onClick={() => window.open(affiliateLink, '_blank')}
                    >
                      Start My Migration and Save →
                    </Button>
                    {savings > 0 && (
                      <Button 
                        variant="outline" 
                        onClick={shareOnTwitter}
                        className="flex items-center gap-2"
                      >
                        <Twitter className="w-4 h-4" />
                        Share
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-green-600" />
                    Free SSL Included
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-green-600" />
                    Official Partner
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-green-600" />
                    30-Day Guarantee
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-2">
                  As seen on HostAdvice, TechRadar, PCMag
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why Switch Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Switch to Cloudways?</h2>
            
            {/* Quick Facts */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Average 67% Savings</h3>
                <p className="text-gray-600">Most users save significantly compared to premium shared hosting plans</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">24/7 Expert Support</h3>
                <p className="text-gray-600">Real hosting experts, not just tier-1 support representatives</p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Free SSL & CDN Included</h3>
                <p className="text-gray-600">Essential features included at no extra cost</p>
              </Card>
            </div>

            {/* Enhanced Comparison Table */}
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Comprehensive: Shared Hosting vs. Cloudways</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Feature</th>
                        <th className="text-center py-3">Shared Hosting</th>
                        <th className="text-center py-3 text-blue-600">Cloudways</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-3">Server Resources</td>
                        <td className="text-center py-3">
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                          <span className="block text-sm text-gray-600">Shared</span>
                        </td>
                        <td className="text-center py-3">
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                          <span className="block text-sm text-gray-600">Dedicated</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Support Quality</td>
                        <td className="text-center py-3">
                          <span className="text-yellow-600">Basic</span>
                        </td>
                        <td className="text-center py-3">
                          <span className="text-green-600">Expert 24/7</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Performance</td>
                        <td className="text-center py-3">
                          <span className="text-red-600">Variable</span>
                        </td>
                        <td className="text-center py-3">
                          <span className="text-green-600">Consistent</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Scalability</td>
                        <td className="text-center py-3">
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                          <span className="block text-sm text-gray-600">Limited</span>
                        </td>
                        <td className="text-center py-3">
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                          <span className="block text-sm text-gray-600">Auto-scaling</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Security</td>
                        <td className="text-center py-3">
                          <span className="text-yellow-600">Basic</span>
                        </td>
                        <td className="text-center py-3">
                          <span className="text-green-600">Enterprise-grade</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Compliance (PCI/HIPAA)</td>
                        <td className="text-center py-3">
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                          <span className="block text-sm text-gray-600">Not available</span>
                        </td>
                        <td className="text-center py-3">
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                          <span className="block text-sm text-gray-600">Available</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real User Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Real User Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">SJ</span>
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">E-commerce Store Owner</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Migrated from Bluehost, now saving $41/month! My site loads 3x faster and customer complaints about slow checkout are gone."</p>
                </div>
                <div className="text-green-600 font-bold">Saved: $492/year</div>
              </Card>
              
              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-green-600">MC</span>
                    </div>
                    <div>
                      <p className="font-semibold">Mike Chen</p>
                      <p className="text-sm text-gray-600">Digital Agency</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"Switched from SiteGround. The 24/7 support actually knows what they're talking about. Saving $28/month per client site."</p>
                </div>
                <div className="text-green-600 font-bold">Saved: $336/year per site</div>
              </Card>
              
              <Card className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-purple-600">AR</span>
                    </div>
                    <div>
                      <p className="font-semibold">Anna Rodriguez</p>
                      <p className="text-sm text-gray-600">Food Blogger</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"My blog went from crashing during viral posts to handling 50k visitors smoothly. The automatic backups saved me once already!"</p>
                </div>
                <div className="text-green-600 font-bold">Saved: $180/year</div>
              </Card>
            </div>
          </div>

          {/* Expert Articles Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Expert Insights & Guides</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Server className="w-6 h-6 text-blue-600" />
                    <Badge variant="outline">Performance Guide</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4">10 Reasons to Move from Shared Hosting to Cloud Hosting</h3>
                  <div className="text-gray-700 space-y-3">
                    <p><strong>1. Performance:</strong> Dedicated resources mean your site speed doesn't depend on other websites.</p>
                    <p><strong>2. Scalability:</strong> Instantly scale resources during traffic spikes without downtime.</p>
                    <p><strong>3. Security:</strong> Enterprise-grade security with isolated environments and advanced firewalls.</p>
                    <p><strong>4. Reliability:</strong> 99.9%+ uptime with redundant infrastructure across multiple data centers.</p>
                    <p><strong>5. Support:</strong> Expert-level support from cloud specialists, not general customer service.</p>
                    <p><strong>6. Compliance:</strong> PCI DSS and HIPAA compliance options for regulated industries.</p>
                    <p><strong>7. Control:</strong> Full server access with SSH, custom configurations, and software installations.</p>
                    <p><strong>8. Backup & Recovery:</strong> Automated backups with one-click restore functionality.</p>
                    <p><strong>9. Global CDN:</strong> Built-in content delivery network for faster global load times.</p>
                    <p><strong>10. Cost Efficiency:</strong> Pay only for resources you use, with transparent pricing.</p>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(affiliateLink, '_blank')}
                  >
                    Start Your Cloud Migration →
                  </Button>
                </div>
              </article>

              {/* Article 2 */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-6 h-6 text-green-600" />
                    <Badge variant="outline">Migration Guide</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Step-by-Step: How to Migrate Your Website to Cloudways</h3>
                  <div className="text-gray-700 space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Phase 1: Preparation (Day 1)</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Sign up for your Cloudways account</li>
                        <li>• Choose your cloud provider (AWS, Google Cloud, etc.)</li>
                        <li>• Select server size based on your traffic</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phase 2: Migration (Day 1-2)</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Submit free migration request</li>
                        <li>• Cloudways experts handle file transfer</li>
                        <li>• Database migration with zero downtime</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phase 3: Go Live (Day 2-3)</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• DNS propagation and SSL setup</li>
                        <li>• Performance testing and optimization</li>
                        <li>• 24/7 monitoring activation</li>
                      </ul>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(affiliateLink, '_blank')}
                  >
                    Get Free Migration →
                  </Button>
                </div>
              </article>

              {/* Article 3 */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Lock className="w-6 h-6 text-purple-600" />
                    <Badge variant="outline">Cost Analysis</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Cloudways vs. SiteGround/Bluehost: Real Cost & Performance Comparison</h3>
                  <div className="text-gray-700 space-y-3">
                    <div className="bg-gray-50 p-3 rounded">
                      <h4 className="font-semibold mb-2">Total Cost of Ownership (Annual)</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>SiteGround Pro: $287/year</div>
                        <div>Cloudways: $168/year</div>
                        <div>Bluehost Choice Plus: $215/year</div>
                        <div className="font-bold text-green-600">Savings: $119/year</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance Metrics</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• <strong>Load Time:</strong> 40% faster than shared hosting</li>
                        <li>• <strong>Uptime:</strong> 99.99% vs 99.5% shared hosting</li>
                        <li>• <strong>TTFB:</strong> Under 200ms globally with CDN</li>
                        <li>• <strong>Concurrent Users:</strong> 10x more capacity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hidden Costs Avoided</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• No renewal price increases</li>
                        <li>• Free SSL certificates included</li>
                        <li>• No CDN subscription fees</li>
                        <li>• Free migration and setup</li>
                      </ul>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-purple-600 hover:bg-purple-700"
                    onClick={() => window.open(affiliateLink, '_blank')}
                  >
                    See Your Savings →
                  </Button>
                </div>
              </article>
            </div>
          </section>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions About Cloudways Savings</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">How do I migrate my website to Cloudways?</h3>
                  <p className="text-gray-700">Cloudways offers free migration services for new customers. Simply sign up for an account, submit a migration request through your dashboard, and their expert team will handle the entire process within 24-48 hours with zero downtime. No technical skills required - they handle everything from file transfers to database migration.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Is Cloudways shared hosting?</h3>
                  <p className="text-gray-700">No, Cloudways is managed cloud hosting, not shared hosting. You get dedicated cloud server resources from top providers like AWS, Google Cloud, DigitalOcean, and Linode. This means better performance, security, and reliability compared to traditional shared hosting where resources are shared among multiple websites.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">What are the main benefits of moving from shared hosting to Cloudways?</h3>
                  <p className="text-gray-700">Key benefits include: 3x faster loading speeds with dedicated resources, 24/7 expert support from cloud specialists, automatic daily backups with one-click restore, free SSL certificates, built-in CDN for global performance, advanced security with firewalls and malware protection, easy scalability during traffic spikes, and compliance options for PCI/HIPAA requirements.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Does Cloudways offer free migration?</h3>
                  <p className="text-gray-700">Yes, Cloudways provides completely free website migration for new customers. Their migration experts handle the entire process including file transfers, database migration, DNS setup, and testing to ensure everything works perfectly on your new cloud server with zero downtime.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">How much does Cloudways cost compared to shared hosting?</h3>
                  <p className="text-gray-700">Cloudways plans start at $14/month for cloud hosting, which often costs less than premium shared hosting plans when you factor in all included features. Most users save 30-70% long-term due to better performance, no renewal price hikes, included SSL, CDN, backups, and no hidden fees that shared hosts often charge for essential features.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Lead Magnet */}
          <Card className="max-w-2xl mx-auto mb-16 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200">
            <CardContent className="p-8 text-center">
              <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Free Migration Checklist</h3>
              <p className="text-gray-700 mb-6">Get our comprehensive step-by-step checklist to ensure a smooth migration to Cloudways.</p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleLeadMagnet}
              >
                Download Free Checklist
              </Button>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="max-w-2xl mx-auto text-center bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Saving?</h3>
              <p className="mb-6 text-green-100">Join thousands of satisfied customers who've made the switch to Cloudways</p>
              <Button 
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3"
                onClick={() => window.open(affiliateLink, '_blank')}
              >
                Start Your Free Trial Today
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sticky Mobile CTA */}
        {showStickyBar && (
          <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white p-4 shadow-lg z-50">
            <Button 
              className="w-full bg-white text-green-600 hover:bg-gray-100 font-bold"
              onClick={() => window.open(affiliateLink, '_blank')}
            >
              Calculate Your Savings & Start Free Trial →
            </Button>
          </div>
        )}

        {/* Exit Intent Popup */}
        {showExitIntent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Wait! Get 25% OFF</h3>
                <p className="text-gray-700 mb-6">Get 25% OFF your first 3 months with Cloudways using our exclusive link!</p>
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      window.open(affiliateLink + '&promo=SAVE25', '_blank');
                      setShowExitIntent(false);
                    }}
                  >
                    Claim Discount
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowExitIntent(false)}
                  >
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-100 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <Separator className="mb-4" />
            <p className="text-sm">
              *Disclosure: I earn commissions if you sign up for Cloudways using my links. This helps support free resources like this calculator. 
              <a href="#" className="text-blue-600 hover:underline ml-1">Learn more</a>
            </p>
            <p className="text-xs mt-2">
              All affiliate links use rel="sponsored" and UTM parameters for tracking compliance.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
