import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, DollarSign, Shield } from 'lucide-react';

const TenReasons = () => {
  return (
    <>
      <Helmet>
        <title>10 Compelling Reasons to Switch to Cloudways in 2025 | Expert Analysis</title>
        <meta name="description" content="Discover why thousands of businesses are migrating to Cloudways. From 3x faster performance to 40% cost savings." />
      </Helmet>

      <div className="min-h-screen gradient-subtle">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">10 Reasons to Switch</span>
          </nav>

          <header className="mb-12">
            <Badge variant="secondary" className="mb-4">Expert Analysis</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              10 Compelling Reasons to Switch to Cloudways
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Comprehensive analysis with real case studies and data-backed insights.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card className="p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-8 h-8 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">1. 3x Faster Performance</h2>
                  <p>Average load time drops from 3.2s to 0.8s with optimized infrastructure.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">2. Save 40% on Costs</h2>
                  <p>No hidden fees, no renewal hikes. Transparent pricing that saves $479 annually.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold mb-2">3. Enterprise Security</h2>
                  <p>Dedicated firewalls, automated patches, and 24/7 monitoring included.</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 mt-12 bg-gradient-to-br from-primary/5 to-primary/10">
            <h2 className="text-2xl font-bold mb-4">Ready to Make the Switch?</h2>
            <Button asChild size="lg">
              <a href="https://www.cloudways.com/en/?id=1436994" target="_blank" rel="noopener noreferrer">
                Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TenReasons;
