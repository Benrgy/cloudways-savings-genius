
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
              <Zap className="w-6 h-6 text-accent" />
              Performance Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Enable Varnish caching for 10x faster page loads
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Configure Redis for database query optimization
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Set up Cloudflare Enterprise CDN integration
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Use PHP 8+ with OPcache for better performance
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Enable HTTP/2 and Brotli compression
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Security Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Enable two-factor authentication for admin access
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Configure automatic malware scanning
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Set up IP whitelisting for critical operations
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Install free SSL certificates with auto-renewal
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Enable bot protection and DDoS mitigation
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Database className="w-6 h-6 text-secondary" />
              Monitoring & Scaling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Set up real-time server monitoring alerts
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Configure automatic scaling triggers
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Monitor application performance metrics
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Set up automated backup schedules
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Use staging environments for safe testing
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <HardDrive className="w-6 h-6 text-accent" />
              Dashboard Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Access detailed server analytics and logs
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                One-click application installations
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Manage domains and SSL certificates
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Clone servers and applications instantly
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
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
