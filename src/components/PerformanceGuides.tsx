
import React from 'react';
import { Zap, Shield, Database, HardDrive, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PerformanceGuides: React.FC = () => {
  return (
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
  );
};

export default PerformanceGuides;
