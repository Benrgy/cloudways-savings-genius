
import React from 'react';
import { ArrowLeft, Server, Shield, Zap, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const TenReasons = () => {
  const affiliateLink = "https://www.cloudways.com/en/?id=1384181&utm_source=article&utm_medium=ten-reasons&utm_campaign=savings";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 text-lg font-medium">
            <ArrowLeft className="w-5 h-5" />
            Back to Calculator
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            10 Reasons to Move from Shared Hosting to Cloud Hosting
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Discover why thousands of website owners are making the switch to managed cloud hosting with Cloudways.
          </p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  Dedicated Resources & Consistent Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Unlike shared hosting where resources are divided among hundreds of websites, cloud hosting gives you dedicated CPU, RAM, and storage. This means your site speed doesn't depend on other websites sharing your server, resulting in consistently fast loading times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  Instant Scalability for Traffic Spikes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Scale resources instantly during traffic spikes without any downtime. With one-click vertical scaling, you can handle viral content, seasonal traffic, or sudden growth without your site crashing or slowing down.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  Enterprise-Grade Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Get isolated environments, advanced firewalls, bot protection, malware scanning, and regular security updates. Cloud hosting provides enterprise-level security that shared hosting simply cannot match.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-destructive font-bold">4</span>
                  </div>
                  99.9%+ Uptime Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Benefit from redundant infrastructure across multiple data centers globally. Cloud hosting offers superior uptime compared to shared hosting, ensuring your site is always accessible to visitors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-bold">5</span>
                  </div>
                  Expert-Level 24/7 Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Get help from cloud specialists who understand server management, not just general customer service. Expert support means faster resolution times and better technical guidance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">6</span>
                  </div>
                  Compliance & Regulatory Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  PCI DSS and HIPAA compliance options are available for regulated industries and e-commerce sites. Meet strict security and privacy requirements that shared hosting cannot provide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold">7</span>
                  </div>
                  Full Server Control & Custom Configurations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Get full server access with SSH, custom configurations, and the ability to install any software you need. Unlike shared hosting restrictions, you have complete control over your environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold">8</span>
                  </div>
                  Automated Backups & One-Click Recovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Daily automated backups with one-click restore functionality protect your data. Unlike basic shared hosting backups, you get enterprise-grade data protection with multiple recovery points.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">9</span>
                  </div>
                  Global CDN & Edge Caching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Built-in content delivery network ensures faster loading times for visitors worldwide. Edge caching reduces server load and improves performance globally, features rarely included in shared hosting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold">10</span>
                  </div>
                  Transparent Pricing & Cost Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Pay only for the resources you actually use, with transparent pricing and no hidden fees. No renewal price increases that shared hosts often implement after the first year.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 gradient-hero text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Make the Switch?</h3>
              <p className="mb-6 text-primary-foreground/80">
                Join thousands of website owners who've upgraded to cloud hosting
              </p>
              <Button 
                size="lg"
                className="bg-background text-primary hover:bg-muted text-lg px-8 py-3 transition-smooth"
                onClick={() => window.open(affiliateLink, '_blank')}
                aria-label="Start your cloud hosting migration with Cloudways"
              >
                Start Your Migration Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TenReasons;
