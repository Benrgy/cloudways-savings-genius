import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">What are the main benefits of moving from shared hosting to Cloudways?</h3>
            <p className="text-muted-foreground">
              Key benefits include: 3x faster loading speeds with dedicated resources, 24/7 expert support from cloud specialists (not generic customer service), automatic daily backups with one-click restore, free SSL certificates, built-in CDN for global performance, advanced security with firewalls and malware protection, easy scalability during traffic spikes, and compliance options for PCI DSS and HIPAA requirements.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">How accurate is this savings calculator?</h3>
            <p className="text-muted-foreground">Our calculator uses real-world pricing data from major shared hosting providers and includes hidden costs like SSL certificates, premium backups, CDN services, and renewal price increases. We factor in Cloudways' transparent pricing with no surprise fees. The calculations are based on actual customer migrations and verified savings reports from over 1,000 users.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Is the migration really free and how long does it take?</h3>
            <p className="text-muted-foreground">Yes, Cloudways provides completely free migration for all new customers. The process typically takes 24-48 hours and is handled by certified migration experts. They guarantee zero downtime and will handle complex databases, custom configurations, and multiple websites. You'll receive email updates throughout the process and can track progress in your dashboard.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">What makes Cloudways different from other cloud hosting providers?</h3>
            <p className="text-muted-foreground">Cloudways is a managed cloud platform that sits on top of major cloud providers (AWS, Google Cloud, DigitalOcean). You get enterprise-level infrastructure with simplified management. Unlike raw cloud services, Cloudways includes managed services, security, backups, monitoring, and 24/7 support. Unlike shared hosting, you get dedicated resources and can scale instantly.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Can I handle traffic spikes without additional costs?</h3>
            <p className="text-muted-foreground">Yes, Cloudways offers vertical scaling where you can temporarily increase your server resources during traffic spikes and scale back down afterward. You only pay for the additional resources during the time you use them. This is perfect for handling viral content, seasonal sales, or marketing campaigns without paying for unused capacity year-round.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">What level of support can I expect?</h3>
            <p className="text-muted-foreground">Cloudways provides 24/7/365 support from cloud hosting specialists, not general customer service representatives. The support team includes server administrators, security experts, and performance specialists. Average response time is under 60 seconds for live chat, and they can directly access and fix server-level issues that shared hosting support cannot handle.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">How does pricing work and are there hidden fees?</h3>
            <p className="text-muted-foreground">Cloudways uses transparent pay-as-you-use pricing with no setup fees, hidden charges, or renewal price increases. You pay only for the server resources you consume, calculated hourly and billed monthly. All features (SSL, backups, CDN, security, support) are included. You can upgrade or downgrade anytime without penalties or long-term contracts.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3">Is my website secure on Cloudways?</h3>
            <p className="text-muted-foreground">Cloudways provides enterprise-grade security including dedicated firewalls, DDoS protection, malware scanning, automated security patches, two-factor authentication, IP whitelisting, and isolated server environments. They also offer compliance certifications for PCI DSS and HIPAA when required. Regular security audits and 24/7 monitoring ensure your sites stay protected.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;