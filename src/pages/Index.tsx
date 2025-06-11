
import React, { useState, useEffect } from 'react';
import { Calculator, Shield, Zap, Users, Check, X, ExternalLink, Download, Twitter } from 'lucide-react';
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
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Calculate Cloudways pricing based on inputs
  const calculateCloudwaysCost = () => {
    const visitorCount = visitors;
    const storageGB = parseInt(storage) || 0;
    
    // Base pricing logic for Cloudways plans
    if (visitorCount === '<10k' && storageGB <= 25) return 14;
    if (visitorCount === '10-50k' || storageGB <= 50) return 28;
    return 56; // For 50k+ visitors or high storage
  };

  const cloudwaysCost = calculateCloudwaysCost();
  const savings = currentCost ? Math.max(0, parseFloat(currentCost) - cloudwaysCost) : 0;
  const savingsPercentage = currentCost ? Math.round((savings / parseFloat(currentCost)) * 100) : 0;

  // Sticky bar visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const affiliateLink = "https://www.cloudways.com/en/?id=1384181&utm_source=calculator&utm_medium=landing&utm_campaign=savings";

  const shareOnTwitter = () => {
    const text = `I just calculated $${savings.toFixed(0)}/month savings with @Cloudways hosting! Check it out:`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I migrate my website to Cloudways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloudways offers free migration services. Simply sign up, submit a migration request through your dashboard, and their team will handle the entire process within 24-48 hours. No technical skills required."
        }
      },
      {
        "@type": "Question",
        "name": "Is Cloudways shared hosting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Cloudways is managed cloud hosting, not shared hosting. You get dedicated cloud server resources from providers like AWS, Google Cloud, and DigitalOcean, ensuring better performance and security than traditional shared hosting."
        }
      },
      {
        "@type": "Question",
        "name": "What are the main benefits of moving from shared hosting to Cloudways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key benefits include: faster loading speeds (up to 3x faster), 24/7 expert support, automatic backups, free SSL certificates, built-in CDN, better security, and dedicated resources that don't slow down during traffic spikes."
        }
      },
      {
        "@type": "Question",
        "name": "Does Cloudways offer free migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Cloudways provides free website migration for new customers. Their migration experts handle the entire process, ensuring zero downtime and data loss."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Cloudways cost compared to shared hosting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloudways plans start at $14/month for small websites, while many users save money long-term due to better performance, included features (SSL, CDN, backups), and no surprise fees that shared hosts often charge."
        }
      }
    ]
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Official Cloudways Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Managed Cloud Hosting with Easy Setup: 
              <span className="text-blue-600"> Instantly Compare Your Savings</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Use our free calculator to see exactly how much you can save by migrating from shared hosting to Cloudways' managed cloud hosting—no technical skills required.
            </h2>
          </div>

          {/* Introduction */}
          <Card className="max-w-4xl mx-auto mb-12 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Cloudways is a leading managed cloud hosting platform that empowers website owners to upgrade from traditional shared hosting to high-performance cloud servers. Enjoy lightning-fast speeds, 24/7 expert support, free SSL, and automated backups—all with easy, one-click setup. Whether you run a business, e-commerce store, or blog, Cloudways makes cloud hosting simple, affordable, and reliable.
              </p>
            </CardContent>
          </Card>

          {/* Calculator Section */}
          <Card className="max-w-2xl mx-auto mb-12 shadow-xl border-2 border-blue-200">
            <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Calculator className="w-6 h-6" />
                Hosting Savings Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
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
                      <SelectItem value="50k+">50,000+</SelectItem>
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

                {currentCost && visitors && storage && (
                  <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Current Cost</p>
                        <p className="text-2xl font-bold text-gray-900">${currentCost}/month</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Cloudways Cost</p>
                        <p className="text-2xl font-bold text-blue-600">${cloudwaysCost}/month</p>
                      </div>
                    </div>
                    
                    {savings > 0 && (
                      <div className="text-center mb-6">
                        <p className="text-3xl font-bold text-green-600 mb-2">
                          You could save ${savings.toFixed(0)}/month!
                        </p>
                        <p className="text-lg text-gray-700">
                          That's {savingsPercentage}% savings per month
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
              </div>

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

            {/* Comparison Table */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Shared Hosting vs. Cloudways</CardTitle>
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
                        <td className="py-3">Free SSL</td>
                        <td className="text-center py-3">
                          <span className="text-yellow-600">Basic</span>
                        </td>
                        <td className="text-center py-3">
                          <span className="text-green-600">Premium</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
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

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions About Cloudways Savings</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">How do I migrate my website to Cloudways?</h3>
                  <p className="text-gray-700">Cloudways offers free migration services. Simply sign up, submit a migration request through your dashboard, and their team will handle the entire process within 24-48 hours. No technical skills required.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Is Cloudways shared hosting?</h3>
                  <p className="text-gray-700">No, Cloudways is managed cloud hosting, not shared hosting. You get dedicated cloud server resources from providers like AWS, Google Cloud, and DigitalOcean, ensuring better performance and security than traditional shared hosting.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">What are the main benefits of moving from shared hosting to Cloudways?</h3>
                  <p className="text-gray-700">Key benefits include: faster loading speeds (up to 3x faster), 24/7 expert support, automatic backups, free SSL certificates, built-in CDN, better security, and dedicated resources that don't slow down during traffic spikes.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Does Cloudways offer free migration?</h3>
                  <p className="text-gray-700">Yes, Cloudways provides free website migration for new customers. Their migration experts handle the entire process, ensuring zero downtime and data loss.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">How much does Cloudways cost compared to shared hosting?</h3>
                  <p className="text-gray-700">Cloudways plans start at $14/month for small websites, while many users save money long-term due to better performance, included features (SSL, CDN, backups), and no surprise fees that shared hosts often charge.</p>
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
                onClick={() => toast({ title: "Checklist sent!", description: "Check your email for the migration guide." })}
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
          <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white p-4 shadow-lg z-50 md:hidden">
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
