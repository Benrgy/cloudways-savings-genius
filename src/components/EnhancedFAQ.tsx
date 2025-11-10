import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const EnhancedFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const faqCategories = {
    general: {
      title: 'General Questions',
      questions: [
        {
          q: 'What are the main benefits of moving from shared hosting to Cloudways?',
          a: 'Key benefits include: 3x faster loading speeds with dedicated resources, 24/7 expert support from cloud specialists (not generic customer service), automatic daily backups with one-click restore, free SSL certificates, built-in CDN for global performance, advanced security with firewalls and malware protection, easy scalability during traffic spikes, and compliance options for PCI DSS and HIPAA requirements.'
        },
        {
          q: 'How accurate is this savings calculator?',
          a: 'Our calculator uses real-world pricing data from major shared hosting providers updated monthly. We include hidden costs like SSL certificates, premium backups, CDN services, and renewal price increases. The calculations are based on actual customer migrations and verified savings reports from over 1,000 users. We factor in year 1 promotional pricing vs year 2+ renewal rates for accurate comparisons.'
        },
        {
          q: 'What makes Cloudways different from other cloud hosting providers?',
          a: 'Cloudways is a managed cloud platform that sits on top of major cloud providers (AWS, Google Cloud, DigitalOcean, Linode, Vultr). You get enterprise-level infrastructure with simplified management. Unlike raw cloud services that require DevOps expertise, Cloudways includes managed services, security, backups, monitoring, and 24/7 support. Unlike shared hosting, you get dedicated resources and can scale instantly without downtime.'
        },
        {
          q: 'Is Cloudways suitable for WordPress websites?',
          a: 'Absolutely! Cloudways is optimized for WordPress with one-click installation, automatic updates, built-in caching (Varnish, Memcached, Redis), staging environments, and WordPress-specific monitoring. Their support team includes WordPress experts. Over 60% of Cloudways customers run WordPress sites with significantly better performance than shared hosting.'
        }
      ]
    },
    pricing: {
      title: 'Pricing & Costs',
      questions: [
        {
          q: 'How does pricing work and are there hidden fees?',
          a: 'Cloudways uses transparent pay-as-you-use pricing with no setup fees, hidden charges, or renewal price increases. You pay only for the server resources you consume, calculated hourly and billed monthly. All features (SSL, backups, CDN, security, support) are included. You can upgrade or downgrade anytime without penalties or long-term contracts. Starting at $14/month for 1GB RAM server.'
        },
        {
          q: 'Why do shared hosting renewal prices increase so much?',
          a: 'Shared hosting companies use "bait and switch" pricing. Year 1 promotional rates ($2-5/mo) are loss leaders to acquire customers. Renewal rates ($10-18/mo) are where they make profit. Over 5 years, you pay 250-400% more than advertised. Cloudways maintains consistent pricing with no surprise increases, making it more cost-effective long-term.'
        },
        {
          q: 'What additional costs should I expect with Cloudways?',
          a: 'Core hosting includes everything (SSL, CDN, backups, support). Optional add-ons: Premium support packages ($100-500/mo), additional backup storage beyond included amount, dedicated IPs ($2/mo per IP), and compliance certifications (PCI DSS, HIPAA) for specific industries. Most users need no add-ons beyond the base server cost.'
        },
        {
          q: 'Can I save money by choosing a smaller server initially?',
          a: 'Yes! Start with the 1GB plan ($14/mo) and scale up as needed. Unlike shared hosting that locks you into plans, Cloudways allows instant vertical scaling. Monitor your actual resource usage and right-size your server. Many users save 30-40% by choosing appropriate server sizes rather than over-provisioning.'
        },
        {
          q: 'How much does Cloudways cost compared to AWS or Google Cloud directly?',
          a: 'Cloudways adds a management layer (typically 30-50% premium) but includes services that would cost extra on raw cloud: 24/7 support, automated backups, security monitoring, CDN, SSL management, and server optimization. For most businesses, Cloudways is actually cheaper than managing raw cloud + paying for these services separately or hiring DevOps staff.'
        }
      ]
    },
    migration: {
      title: 'Migration Process',
      questions: [
        {
          q: 'Is the migration really free and how long does it take?',
          a: 'Yes, Cloudways provides completely free migration for all new customers regardless of plan size. The process typically takes 24-48 hours and is handled by certified migration experts. They guarantee zero downtime and will handle complex databases, custom configurations, and multiple websites. You receive email updates throughout the process and can track progress in your dashboard.'
        },
        {
          q: 'What if my website has custom configurations or plugins?',
          a: 'Cloudways migration experts handle custom configurations, including: custom .htaccess rules, specialized PHP versions, custom databases, multisite WordPress setups, e-commerce stores with inventory, and development/staging environments. They test everything before going live and provide post-migration support for 30 days.'
        },
        {
          q: 'Can I migrate multiple websites at once?',
          a: 'Yes! Cloudways handles bulk migrations for agencies and businesses with multiple sites. You can migrate all sites simultaneously or stagger migrations based on your timeline. Each site is tested individually before going live. Many agencies migrate 10-50 client sites in a single migration project.'
        },
        {
          q: 'What happens to my emails during migration?',
          a: 'Email services are handled separately from web hosting. Your email will continue working during migration. Cloudways migration team provides detailed DNS change instructions. If you use cPanel email, they recommend migrating to Google Workspace or Microsoft 365 (better deliverability and features). Email migration assistance is included.'
        },
        {
          q: 'How do I prepare my website for migration?',
          a: 'Minimal preparation needed! Have your current hosting credentials ready (FTP, database, control panel access). Create a full backup as precaution. Document any custom configurations. The Cloudways team handles the technical work - you just need to provide access and approve DNS changes when ready to go live.'
        },
        {
          q: 'What if something goes wrong during migration?',
          a: 'Cloudways guarantees successful migration. If issues arise, they troubleshoot and fix them at no cost. Your original site stays live until you approve the migrated version. They provide rollback options if needed. Post-migration support includes 30 days of assistance for any migration-related issues.'
        }
      ]
    },
    performance: {
      title: 'Performance & Speed',
      questions: [
        {
          q: 'How much faster will my website actually be?',
          a: 'Average speed improvements: 40-60% faster page loads, 3x faster time to first byte (TTFB), 50% faster admin/dashboard. Real example: A WooCommerce store went from 4.2s to 1.3s page load, increasing conversions by 27%. Speed depends on optimization but dedicated resources alone provide 2-3x improvement over shared hosting.'
        },
        {
          q: 'Can I handle traffic spikes without additional costs?',
          a: 'Yes! Cloudways offers vertical scaling where you can temporarily increase server resources during traffic spikes and scale back afterward. You only pay for additional resources during usage (hourly billing). Perfect for handling viral content, seasonal sales, or marketing campaigns without paying for unused capacity year-round.'
        },
        {
          q: 'What caching options are available?',
          a: 'Cloudways includes enterprise-grade caching: Varnish for full-page caching, Memcached for object caching, Redis for database query caching, built-in CDN (Cloudways CDN), and browser caching. All configurable via dashboard. These caching layers provide 5-10x performance improvements for dynamic sites.'
        },
        {
          q: 'How does Cloudways CDN compare to Cloudflare?',
          a: 'Cloudways includes free CDN with 65+ global locations. For advanced features, you can integrate Cloudflare (free or paid) on top of Cloudways. Many users run both: Cloudways CDN for static assets + Cloudflare for DDoS protection and additional global reach. Integration is one-click.'
        },
        {
          q: 'Will my website perform better for international visitors?',
          a: 'Significantly better! Choose server location closest to your audience. Use built-in CDN for global content delivery. Many users run multiple servers in different regions (US, Europe, Asia) for $14-28/mo each. Cloudways makes multi-region deployment simple compared to managing separate hosting accounts.'
        }
      ]
    },
    support: {
      title: 'Support & Management',
      questions: [
        {
          q: 'What level of support can I expect?',
          a: 'Cloudways provides 24/7/365 support from cloud hosting specialists, not general customer service representatives. The support team includes server administrators, security experts, and performance specialists. Average response time is under 60 seconds for live chat. They can directly access and fix server-level issues that shared hosting support cannot handle.'
        },
        {
          q: 'Do I need technical knowledge to manage Cloudways?',
          a: 'No! The dashboard is designed for non-technical users. Common tasks (deployments, backups, SSL, scaling) are one-click operations. Advanced users get SSH access and full control. Cloudways strikes the balance: simple for beginners, powerful for experts. If you can use WordPress admin, you can manage Cloudways.'
        },
        {
          q: 'What if I need help optimizing my website performance?',
          a: 'Support includes performance optimization guidance. Advanced optimization (code reviews, database tuning, custom caching strategies) available through Cloudways Experts program ($150-500 one-time fee) or premium support plans ($100-500/mo). Many optimization tasks are automated or available as one-click features.'
        },
        {
          q: 'Can Cloudways help with security issues or malware removal?',
          a: 'Yes! Support includes: malware scanning guidance, security patch application, firewall configuration, and security incident response. For serious compromises, they isolate affected sites and provide remediation steps. Premium support plans include proactive security monitoring and faster incident response.'
        }
      ]
    },
    security: {
      title: 'Security & Compliance',
      questions: [
        {
          q: 'Is my website secure on Cloudways?',
          a: 'Cloudways provides enterprise-grade security including dedicated firewalls, DDoS protection, malware scanning, automated security patches, two-factor authentication, IP whitelisting, and isolated server environments. They also offer compliance certifications for PCI DSS and HIPAA when required. Regular security audits and 24/7 monitoring ensure your sites stay protected.'
        },
        {
          q: 'How does Cloudways handle SSL certificates?',
          a: 'Free SSL certificates via Let\'s Encrypt with automatic renewal. One-click installation for unlimited domains and subdomains. Custom SSL certificates supported. Automatic HTTP to HTTPS redirects. SSL monitoring alerts you before expiration. Unlike shared hosting charging $50-100/year per SSL, Cloudways includes unlimited free SSL.'
        },
        {
          q: 'What backup and disaster recovery options exist?',
          a: 'Automated daily backups included (stored for 7 days on base plans, 14-30 days on higher tiers). On-demand backups before major changes. One-click restore to any backup point. Backups stored separately from production servers. Additional off-site backup options available. Backup process doesn\'t impact live site performance.'
        },
        {
          q: 'Can Cloudways meet PCI DSS or HIPAA compliance requirements?',
          a: 'Yes! Cloudways offers PCI DSS and HIPAA compliance add-ons for regulated industries. This includes: dedicated IP addresses, enhanced security monitoring, compliance audit support, encrypted data storage, and BAA (Business Associate Agreement) for HIPAA. Compliance packages start at additional cost on top of base hosting.'
        },
        {
          q: 'What happens if my server is compromised?',
          a: 'Cloudways provides isolated environments per application, limiting breach impact. Automated malware scanning detects threats. Support team assists with incident response. Server snapshots allow rolling back to pre-compromise state. Unlike shared hosting where one compromised site affects hundreds, your applications are isolated.'
        }
      ]
    },
    technical: {
      title: 'Technical Details',
      questions: [
        {
          q: 'Which cloud providers does Cloudways support?',
          a: 'Cloudways runs on top of 5 major cloud providers: DigitalOcean (most popular, best value), AWS (enterprise features), Google Cloud (AI/ML capabilities), Linode (developer favorite), and Vultr (global reach). You choose the provider based on your needs. Can run different sites on different providers from one Cloudways account.'
        },
        {
          q: 'What server specifications are available?',
          a: 'Servers range from 1GB RAM ($14/mo) to 384GB RAM ($3,569/mo on AWS). Most users start with 1-2GB and scale as needed. All servers include: SSD storage, dedicated IP, full root access, choice of PHP versions, MySQL/MariaDB, Redis, Memcached, Varnish, and Nginx/Apache web servers.'
        },
        {
          q: 'Can I use my own domain and email services?',
          a: 'Absolutely! Point your domain DNS to Cloudways servers (they provide detailed instructions). Use any email service (Google Workspace, Microsoft 365, private email). Cloudways focuses on web hosting, not email. This separation actually improves email deliverability compared to shared hosting email.'
        },
        {
          q: 'What PHP and database versions are supported?',
          a: 'Multiple PHP versions available simultaneously (5.6 through 8.3). Switch PHP versions per application without affecting other sites. MySQL 5.7/8.0 and MariaDB supported. Upgrade database versions with one click. This flexibility is impossible on shared hosting where you\'re stuck with server-wide versions.'
        },
        {
          q: 'Can I install custom software or modify server configuration?',
          a: 'Yes! SSH access included on all plans. Install custom software, modify PHP settings, configure web server, set up cron jobs, and customize firewall rules. Unlike shared hosting restrictions, you have root-level control. Managed services handle security and maintenance while you retain customization freedom.'
        }
      ]
    }
  };

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Comprehensive Hosting Questions Answered</h2>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about switching to cloud hosting with Cloudways
        </p>
      </div>

      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="grid grid-cols-2 lg:grid-cols-7 w-full mb-6">
          {Object.entries(faqCategories).map(([key, category]) => (
            <TabsTrigger key={key} value={key} className="text-xs sm:text-sm">
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(faqCategories).map(([key, category]) => (
          <TabsContent key={key} value={key}>
            <Accordion type="single" collapsible className="space-y-4">
              {category.questions.map((faq, index) => (
                <Card key={index}>
                  <AccordionItem value={`${key}-${index}`} className="border-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <h3 className="text-lg font-semibold text-left pr-4">{faq.q}</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <CardContent className="pt-0 pb-6 px-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-8 gradient-hero text-primary-foreground">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-primary-foreground/90 mb-4">
            Our Cloudways experts are available 24/7 to answer your specific questions and help you 
            determine if cloud hosting is the right choice for your website.
          </p>
          <p className="text-sm text-primary-foreground/80">
            Use the calculator above to see your personalized savings estimate, or contact Cloudways 
            support directly through their live chat for immediate assistance.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default EnhancedFAQ;
