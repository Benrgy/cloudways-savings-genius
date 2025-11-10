import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { providerData, cloudwaysPricing } from '@/data/providerPricing';

const ProviderComparison = () => {
  const providers = ['bluehost', 'siteground', 'hostgator', 'godaddy', 'wpengine', 'kinsta'];
  
  const features = [
    { key: 'freeSSL', label: 'Free SSL Certificates' },
    { key: 'freeBackups', label: 'Free Daily Backups' },
    { key: 'freeCDN', label: 'Free CDN' },
    { key: 'dedicatedResources', label: 'Dedicated Resources' },
    { key: 'autoScaling', label: 'Auto-Scaling' },
    { key: 'expertSupport', label: 'Expert 24/7 Support' }
  ];

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Cloudways vs Major Hosting Providers</h2>
        <p className="text-xl text-muted-foreground">
          See how Cloudways stacks up against the competition with real pricing and features
        </p>
      </div>

      {/* Pricing Comparison Table */}
      <Card className="mb-8 overflow-hidden">
        <CardHeader>
          <CardTitle>Real Pricing Comparison (Updated January 2025)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Provider</th>
                  <th className="text-center p-4 font-semibold">Year 1 Price</th>
                  <th className="text-center p-4 font-semibold">Renewal Price</th>
                  <th className="text-center p-4 font-semibold">2-Year Total</th>
                  <th className="text-center p-4 font-semibold">Uptime</th>
                  <th className="text-center p-4 font-semibold">Avg Load Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b gradient-secondary bg-opacity-10">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <strong className="text-primary">Cloudways</strong>
                      <Badge variant="secondary" className="text-xs">Recommended</Badge>
                    </div>
                  </td>
                  <td className="text-center p-4 font-semibold text-primary">
                    ${cloudwaysPricing.plans[0].price}/mo
                  </td>
                  <td className="text-center p-4 font-semibold text-primary">
                    ${cloudwaysPricing.plans[0].price}/mo
                  </td>
                  <td className="text-center p-4 font-bold text-primary text-lg">
                    ${cloudwaysPricing.plans[0].price * 24}
                  </td>
                  <td className="text-center p-4 text-secondary font-semibold">
                    {cloudwaysPricing.features.uptime}
                  </td>
                  <td className="text-center p-4 text-secondary font-semibold">
                    {cloudwaysPricing.features.averageLoadTime}
                  </td>
                </tr>
                {providers.map((providerKey) => {
                  const provider = providerData[providerKey];
                  const twoYearTotal = (provider.basePrice * 12) + (provider.renewalPrice * 12);
                  const savings = twoYearTotal - (cloudwaysPricing.plans[0].price * 24);
                  
                  return (
                    <tr key={providerKey} className="border-b hover:bg-muted/50 transition-smooth">
                      <td className="p-4 font-medium">{provider.name}</td>
                      <td className="text-center p-4 text-muted-foreground">
                        ${provider.basePrice}/mo
                      </td>
                      <td className="text-center p-4">
                        <span className="text-destructive font-semibold">
                          ${provider.renewalPrice}/mo
                        </span>
                        <div className="text-xs text-muted-foreground">
                          +{Math.round(((provider.renewalPrice - provider.basePrice) / provider.basePrice) * 100)}% increase
                        </div>
                      </td>
                      <td className="text-center p-4 font-semibold">
                        ${twoYearTotal.toFixed(2)}
                        {savings > 0 && (
                          <div className="text-xs text-destructive">
                            ${savings.toFixed(0)} more than Cloudways
                          </div>
                        )}
                      </td>
                      <td className="text-center p-4 text-muted-foreground">
                        {provider.features.uptime}
                      </td>
                      <td className="text-center p-4 text-muted-foreground">
                        {provider.features.averageLoadTime}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Feature Comparison */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Feature Comparison: What You Actually Get</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold text-primary">Cloudways</th>
                  {providers.map((providerKey) => (
                    <th key={providerKey} className="text-center p-4 font-semibold">
                      {providerData[providerKey].name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={feature.key} className={idx % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="p-4 font-medium">{feature.label}</td>
                    <td className="text-center p-4">
                      <Check className="w-5 h-5 text-secondary mx-auto" />
                    </td>
                    {providers.map((providerKey) => {
                      const provider = providerData[providerKey];
                      const hasFeature = provider.features[feature.key as keyof typeof provider.features];
                      return (
                        <td key={providerKey} className="text-center p-4">
                          {hasFeature ? (
                            <Check className="w-5 h-5 text-secondary mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 p-6 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Pricing data updated January 2025. Year 1 prices reflect typical promotional rates. 
          Renewal prices shown are standard rates after promotional period ends. Cloudways maintains consistent 
          pricing with no surprise renewal increases. Additional costs may apply for premium features, extra storage, 
          or compliance certifications.
        </p>
      </div>
    </section>
  );
};

export default ProviderComparison;
