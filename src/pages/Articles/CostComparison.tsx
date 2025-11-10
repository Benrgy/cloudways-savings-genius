import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CostComparison = () => {
  return (
    <>
      <Helmet>
        <title>Cloudways Cost Comparison 2025 | Hidden Fees Revealed</title>
        <meta name="description" content="Detailed cost analysis comparing Cloudways with all major providers." />
      </Helmet>

      <div className="min-h-screen gradient-subtle">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Cost Comparison</span>
          </nav>

          <header className="mb-12">
            <Badge variant="secondary" className="mb-4">Detailed Analysis</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Cost Comparison 2025
            </h1>
            <p className="text-xl text-muted-foreground">
              Uncover hidden fees and real 5-year costs.
            </p>
          </header>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">40-60% Savings</h2>
            <p className="text-muted-foreground mb-6">
              Save thousands with transparent pricing and no hidden fees.
            </p>
            <Button asChild size="lg">
              <Link to="/">Calculate Your Savings <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CostComparison;
