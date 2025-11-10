import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MigrationGuide = () => {
  return (
    <>
      <Helmet>
        <title>Complete Migration Guide to Cloudways | Zero Downtime</title>
        <meta name="description" content="Step-by-step guide for migrating to Cloudways with zero downtime." />
      </Helmet>

      <div className="min-h-screen gradient-subtle">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Migration Guide</span>
          </nav>

          <header className="mb-12">
            <Badge variant="secondary" className="mb-4">Step-by-Step Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Migration Guide to Cloudways
            </h1>
            <p className="text-xl text-muted-foreground">
              Migrate with zero downtime and expert support.
            </p>
          </header>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">5-Phase Migration Process</h2>
            <p className="text-muted-foreground mb-6">
              Follow our proven migration process for a smooth transition.
            </p>
            <Button asChild size="lg">
              <a href="https://www.cloudways.com/en/?id=1436994" target="_blank" rel="noopener noreferrer">
                Get Free Migration <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MigrationGuide;
