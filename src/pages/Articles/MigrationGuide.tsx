
import React from 'react';
import { ArrowLeft, CheckCircle, Globe, Server, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const MigrationGuide = () => {
  const affiliateLink = "https://www.cloudways.com/en/?id=1384181&utm_source=article&utm_medium=migration-guide&utm_campaign=savings";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 text-lg font-medium">
            <ArrowLeft className="w-5 h-5" />
            Back to Calculator
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Step-by-Step: How to Migrate Your Website to Cloudways
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Complete migration guide with zero downtime and expert support every step of the way.
          </p>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  Preparation Phase (Day 1)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sign up for Cloudways</h4>
                    <p className="text-gray-600">Create your account using our calculator link to get started with the migration process.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Choose Your Cloud Provider</h4>
                    <p className="text-gray-600">Select from AWS, Google Cloud, DigitalOcean, or Linode based on your needs and budget.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Select Server Size</h4>
                    <p className="text-gray-600">Choose the right server size based on your traffic and resource requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Set Server Location</h4>
                    <p className="text-gray-600">Choose a data center location closest to your target audience for optimal performance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  Migration Process (Day 1-2)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Submit Migration Request</h4>
                    <p className="text-gray-600">Use the free migration form in your Cloudways dashboard to request expert migration assistance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Provide Current Hosting Details</h4>
                    <p className="text-gray-600">Share your current hosting credentials and website information with the migration team.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Migration Handling</h4>
                    <p className="text-gray-600">Cloudways experts handle complete file and database transfers with zero downtime guaranteed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Testing & Verification</h4>
                    <p className="text-gray-600">Thorough testing ensures everything works perfectly on your new cloud server.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  Go Live Phase (Day 2-3)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">DNS Configuration</h4>
                    <p className="text-gray-600">Update your DNS settings to point to the new Cloudways server with guided assistance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">SSL Certificate Installation</h4>
                    <p className="text-gray-600">Free SSL certificate installation and security configuration for encrypted connections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Optimization</h4>
                    <p className="text-gray-600">Enable caching, CDN, and other performance optimizations for maximum speed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Monitoring & Backup Setup</h4>
                    <p className="text-gray-600">Activate 24/7 monitoring and schedule automated backups for peace of mind.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">What Makes Cloudways Migration Special?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>100% Free migration service for all new customers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Zero downtime guaranteed during the entire process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Expert handling of complex databases and custom configurations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>24-48 hour completion time with full testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Post-migration support and optimization assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 gradient-hero text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Migration?</h3>
              <p className="mb-6 text-primary-foreground/80">
                Get expert migration assistance completely free with your Cloudways account
              </p>
              <Button 
                size="lg"
                className="bg-background text-primary hover:bg-muted text-lg px-8 py-3 transition-smooth"
                onClick={() => window.open(affiliateLink, '_blank')}
                aria-label="Start your free migration with Cloudways experts"
              >
                Get Free Migration Help
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MigrationGuide;
