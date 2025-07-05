
import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Globe, Calculator, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ExpertArticles: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">Expert Migration Resources</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">10 Reasons to Switch</h3>
            </div>
            <p className="text-muted-foreground mb-4">
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
              <Globe className="w-8 h-8 text-secondary" />
              <h3 className="text-xl font-semibold">Migration Guide</h3>
            </div>
            <p className="text-muted-foreground mb-4">
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
              <Calculator className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Cost Comparison</h3>
            </div>
            <p className="text-muted-foreground mb-4">
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
  );
};

export default ExpertArticles;
