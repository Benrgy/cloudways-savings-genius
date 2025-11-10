import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Clock, FileText, Server, TestTube, Rocket } from 'lucide-react';

const MigrationTimeline = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Sign Up & Request Migration',
      duration: '5 minutes',
      description: 'Create your Cloudways account and submit migration request through the dashboard. Provide your current hosting credentials.',
      details: [
        'Choose your preferred cloud provider (DigitalOcean recommended for best value)',
        'Select server size based on your needs',
        'Submit migration form with current host details'
      ]
    },
    {
      icon: Server,
      title: 'Expert Migration Team Assigned',
      duration: '1-2 hours',
      description: 'A certified migration specialist reviews your website and creates a migration plan.',
      details: [
        'Team analyzes your site architecture and dependencies',
        'Custom migration strategy for complex setups',
        'You receive timeline and next steps via email'
      ]
    },
    {
      icon: Clock,
      title: 'Migration Execution',
      duration: '12-24 hours',
      description: 'Migration team transfers all files, databases, and configurations. Your live site remains untouched.',
      details: [
        'All website files transferred via secure connection',
        'Database exported and imported with integrity checks',
        'Custom configurations and .htaccess rules replicated',
        'WordPress plugins and themes installed',
        'Email updates throughout the process'
      ]
    },
    {
      icon: TestTube,
      title: 'Testing & Verification',
      duration: '2-4 hours',
      description: 'Comprehensive testing ensures everything works perfectly before going live.',
      details: [
        'Functionality testing of all site features',
        'Performance benchmarking and optimization',
        'SSL certificate installation and testing',
        'Forms, checkout, and integrations verified',
        'Preview URL provided for your review'
      ]
    },
    {
      icon: Check,
      title: 'Your Approval',
      duration: '24-48 hours (your timeline)',
      description: 'Review the migrated site on temporary URL. Approve when you\'re ready to go live.',
      details: [
        'Access preview URL to test migrated site',
        'Compare with live site side-by-side',
        'Request any adjustments needed',
        'Approve to proceed with DNS changes'
      ]
    },
    {
      icon: Rocket,
      title: 'Go Live & Post-Migration',
      duration: '1-2 hours',
      description: 'DNS updated to point to Cloudways. Zero downtime cutover with 30 days of support.',
      details: [
        'DNS changes guided step-by-step',
        'Propagation monitored (typically 4-24 hours)',
        'Both sites kept in sync during propagation',
        '30 days of post-migration support included',
        'Old hosting kept as backup for 7 days'
      ]
    }
  ];

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">How Migration Works: Step-by-Step</h2>
        <p className="text-xl text-muted-foreground">
          Professional migration with zero downtime, handled by certified experts
        </p>
      </div>

      <div className="grid gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card key={index} className="overflow-hidden transition-smooth hover:shadow-elegant">
              <CardHeader className="gradient-subtle pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">
                        Step {index + 1}: {step.title}
                      </CardTitle>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8 gradient-secondary">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-secondary-foreground mb-3">
                Why Cloudways Migration is Different
              </h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/90">
                <li>• <strong>Completely free</strong> for all new customers</li>
                <li>• <strong>Zero downtime</strong> guaranteed during cutover</li>
                <li>• <strong>Expert team</strong> with 10,000+ successful migrations</li>
                <li>• <strong>Complex sites welcome</strong> - custom code, databases, multisites</li>
                <li>• <strong>Post-migration support</strong> for 30 days included</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary-foreground mb-3">
                What You Need to Provide
              </h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/90">
                <li>• Current hosting credentials (FTP/cPanel)</li>
                <li>• Database access information</li>
                <li>• Domain registrar access (for DNS changes)</li>
                <li>• List of any third-party integrations</li>
                <li>• Approval to proceed after testing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 p-6 bg-muted rounded-lg text-center">
        <p className="text-lg font-semibold mb-2">
          Total Migration Time: 24-72 hours (most completed in 24-48 hours)
        </p>
        <p className="text-sm text-muted-foreground">
          Timeline varies based on site complexity and your approval speed. Simple sites often migrate in under 12 hours.
          Complex e-commerce or enterprise sites may take 3-5 days for thorough testing.
        </p>
      </div>
    </section>
  );
};

export default MigrationTimeline;
