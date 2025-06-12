
import React from 'react';
import { ArrowLeft, DollarSign, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CostComparison = () => {
  const affiliateLink = "https://www.cloudways.com/en/?id=1384181&utm_source=article&utm_medium=cost-comparison&utm_campaign=savings";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 text-lg font-medium">
            <ArrowLeft className="w-5 h-5" />
            Back to Calculator
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cloudways vs. SiteGround/Bluehost: Real Cost & Performance Comparison
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Detailed analysis of total cost of ownership and performance metrics to help you make an informed decision.
          </p>

          <Card className="mb-8 bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-800">
                <DollarSign className="w-6 h-6" />
                Total Cost of Ownership (Annual)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">SiteGround GrowBig</h4>
                  <p className="text-2xl font-bold text-red-600">$287/year</p>
                  <p className="text-sm text-gray-600">After renewal pricing</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Bluehost Choice Plus</h4>
                  <p className="text-2xl font-bold text-red-600">$215/year</p>
                  <p className="text-sm text-gray-600">After renewal pricing</p>
                </div>
                <div className="text-center p-4 bg-green-100 rounded-lg border-2 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">Cloudways 2GB</h4>
                  <p className="text-2xl font-bold text-green-600">$168/year</p>
                  <p className="text-sm text-green-700">No price increases</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-green-600">Your Savings: Up to $119/year</p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-semibold">Metric</th>
                        <th className="text-center py-3 font-semibold">Shared Hosting</th>
                        <th className="text-center py-3 font-semibold text-green-600">Cloudways</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Average Load Time</td>
                        <td className="text-center py-3">2.5-4.0 seconds</td>
                        <td className="text-center py-3 text-green-600 font-semibold">0.8-1.5 seconds</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Uptime Guarantee</td>
                        <td className="text-center py-3">99.5%</td>
                        <td className="text-center py-3 text-green-600 font-semibold">99.99%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Time to First Byte (TTFB)</td>
                        <td className="text-center py-3">400-800ms</td>
                        <td className="text-center py-3 text-green-600 font-semibold">Under 200ms</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Concurrent Users</td>
                        <td className="text-center py-3">Limited by shared resources</td>
                        <td className="text-center py-3 text-green-600 font-semibold">10x more capacity</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Database Performance</td>
                        <td className="text-center py-3">Variable (shared)</td>
                        <td className="text-center py-3 text-green-600 font-semibold">3x faster queries</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hidden Costs You Avoid with Cloudways</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Shared Hosting Hidden Costs</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">SSL Certificate: $50-100/year</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">CDN Service: $60-120/year</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">Premium Backups: $24-60/year</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">Renewal Price Increases: 100-200%</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">Migration Fees: $50-150</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Cloudways Includes Everything</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Free SSL certificates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Built-in CDN (Cloudflare Enterprise)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Automated daily backups</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">No renewal price increases</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Free migration and setup</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-World Cost Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Small Business Website (10,000 visitors/month)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">SiteGround GrowBig Year 2:</p>
                        <p>Hosting: $287 + SSL: $79 + CDN: $84 = <span className="font-bold text-red-600">$450/year</span></p>
                      </div>
                      <div>
                        <p className="font-medium">Cloudways 1GB:</p>
                        <p>All-inclusive: <span className="font-bold text-green-600">$168/year</span></p>
                        <p className="text-green-600 font-semibold">Savings: $282/year</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Growing E-commerce Site (50,000 visitors/month)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Bluehost Pro Year 2:</p>
                        <p>Hosting: $359 + SSL: $79 + CDN: $120 = <span className="font-bold text-red-600">$558/year</span></p>
                      </div>
                      <div>
                        <p className="font-medium">Cloudways 2GB:</p>
                        <p>All-inclusive: <span className="font-bold text-green-600">$336/year</span></p>
                        <p className="text-green-600 font-semibold">Savings: $222/year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-semibold">Feature</th>
                        <th className="text-center py-3 font-semibold">Shared Hosting</th>
                        <th className="text-center py-3 font-semibold text-green-600">Cloudways</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Dedicated Resources</td>
                        <td className="text-center py-3"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></td>
                        <td className="text-center py-3"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">One-Click Scaling</td>
                        <td className="text-center py-3"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></td>
                        <td className="text-center py-3"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Advanced Caching</td>
                        <td className="text-center py-3">Basic</td>
                        <td className="text-center py-3 text-green-600">Varnish + Redis</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Support Quality</td>
                        <td className="text-center py-3">Tier 1</td>
                        <td className="text-center py-3 text-green-600">Expert Level</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Server Access</td>
                        <td className="text-center py-3"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></td>
                        <td className="text-center py-3"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Calculate Your Personal Savings</h3>
              <p className="mb-6 text-green-100">
                See exactly how much you can save by switching to Cloudways
              </p>
              <Button 
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3"
                onClick={() => window.open(affiliateLink, '_blank')}
                aria-label="Calculate your hosting cost savings with Cloudways"
              >
                Calculate My Savings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;
