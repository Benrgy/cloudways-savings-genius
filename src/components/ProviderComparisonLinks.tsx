import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const ProviderComparisonLinks = () => {
  const providers = [
    { name: 'Bluehost', slug: 'bluehost', description: 'Most popular shared hosting provider', savings: '$400+' },
    { name: 'SiteGround', slug: 'siteground', description: 'Premium shared hosting with good support', savings: '$600+' },
    { name: 'HostGator', slug: 'hostgator', description: 'Budget-friendly shared hosting', savings: '$350+' },
    { name: 'GoDaddy', slug: 'godaddy', description: 'Largest domain registrar and hosting', savings: '$450+' },
    { name: 'WP Engine', slug: 'wpengine', description: 'Premium managed WordPress hosting', savings: '$200+' },
    { name: 'Kinsta', slug: 'kinsta', description: 'High-end managed WordPress hosting', savings: '$150+' }
  ];

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Detailed Provider Comparisons</h2>
        <p className="text-xl text-muted-foreground">
          See in-depth analysis for your specific hosting provider
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <Link key={provider.slug} to={`/vs/${provider.slug}`}>
            <Card className="h-full hover:shadow-elegant transition-smooth cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                    Cloudways vs {provider.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {provider.description}
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-secondary">
                    Save {provider.savings}/year
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProviderComparisonLinks;
