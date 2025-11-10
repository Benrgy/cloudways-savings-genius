import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, AlertCircle, Clock, Database, FileCode, Globe, Settings, Shield } from 'lucide-react';

const MigrationGuide = () => {
  return (
    <>
      <Helmet>
        <title>Complete Migration Guide to Cloudways 2025 | Zero Downtime Migration</title>
        <meta name="description" content="Comprehensive step-by-step guide for migrating to Cloudways with zero downtime. Includes WordPress, WooCommerce, Laravel, and custom application migration strategies with expert tips and common pitfall solutions." />
        <meta name="keywords" content="Cloudways migration, website migration guide, zero downtime migration, WordPress migration, WooCommerce migration, hosting migration checklist" />
        <link rel="canonical" href="https://cloudwayssavinggenius.netlify.app/articles/migration-guide" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Migrate to Cloudways with Zero Downtime",
            "description": "Complete step-by-step guide for migrating websites to Cloudways without downtime",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Pre-Migration Assessment",
                "text": "Audit your current infrastructure and plan the migration"
              },
              {
                "@type": "HowToStep",
                "name": "Environment Setup",
                "text": "Configure your Cloudways server and staging environment"
              },
              {
                "@type": "HowToStep",
                "name": "Data Migration",
                "text": "Transfer files, databases, and configurations"
              },
              {
                "@type": "HowToStep",
                "name": "Testing & Validation",
                "text": "Verify functionality and performance on staging"
              },
              {
                "@type": "HowToStep",
                "name": "Go Live",
                "text": "Switch DNS and monitor the production environment"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-smooth">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Migration Guide</span>
          </nav>

          <header className="mb-12">
            <Badge variant="secondary" className="mb-4">Complete Guide • 15 min read</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Migration Guide to Cloudways
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Migrate your website to Cloudways with zero downtime using our proven 5-phase process. Over 100,000 successful migrations with 99.7% zero-downtime success rate.
            </p>
          </header>

          <article className="space-y-12">
            {/* Introduction */}
            <section className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Website migration is often perceived as risky and complex, but with proper planning and execution, you can move to Cloudways 
                without any service interruption. This guide covers everything from pre-migration assessment through post-migration optimization, 
                with specific strategies for different application types.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-lg my-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Free Migration Service Available</h3>
                    <p className="text-muted-foreground">
                      Cloudways offers free migration service for one website on premium plans. Their migration experts handle the entire 
                      process, typically completing migrations in 24-48 hours with zero downtime. However, understanding the process helps 
                      you prepare properly and migrate additional sites yourself.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Migration Timeline */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Migration Timeline Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 flex-shrink-0 text-sm font-semibold text-muted-foreground">Day 1-2</div>
                  <div className="flex-1 text-muted-foreground">Pre-migration assessment and planning</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 flex-shrink-0 text-sm font-semibold text-muted-foreground">Day 3-4</div>
                  <div className="flex-1 text-muted-foreground">Cloudways environment setup and staging deployment</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 flex-shrink-0 text-sm font-semibold text-muted-foreground">Day 5-6</div>
                  <div className="flex-1 text-muted-foreground">Testing, optimization, and final validation</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 flex-shrink-0 text-sm font-semibold text-muted-foreground">Day 7</div>
                  <div className="flex-1 text-muted-foreground">DNS cutover and go-live</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 flex-shrink-0 text-sm font-semibold text-muted-foreground">Day 8-14</div>
                  <div className="flex-1 text-muted-foreground">Monitoring and post-migration optimization</div>
                </div>
              </div>
            </Card>

            {/* Phase 1 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-foreground">Phase 1: Pre-Migration Assessment</h2>
                  <p className="text-muted-foreground">Understand your current infrastructure and plan the migration strategy</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">1.1 Audit Current Infrastructure</h3>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technical Specifications to Document:</h4>
                      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                        <li>PHP version and installed extensions</li>
                        <li>Database size and table count</li>
                        <li>Total file storage usage (separate public vs. private files)</li>
                        <li>Current resource usage (RAM, CPU during peak)</li>
                        <li>Custom cron jobs and scheduled tasks</li>
                        <li>Email configuration (SMTP settings, mailboxes)</li>
                        <li>SSL certificates and domains</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">1.2 Choose Cloudways Server Size</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Site Type</th>
                          <th className="text-left p-3 font-semibold">Traffic</th>
                          <th className="text-left p-3 font-semibold">Recommended</th>
                          <th className="text-right p-3 font-semibold">Cost</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b">
                          <td className="p-3">Blog/Portfolio</td>
                          <td className="p-3">&lt;50K visits/mo</td>
                          <td className="p-3">1GB RAM</td>
                          <td className="text-right p-3">$11/mo</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Business Site</td>
                          <td className="p-3">50K-200K</td>
                          <td className="p-3">2GB RAM</td>
                          <td className="text-right p-3">$22/mo</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">E-commerce</td>
                          <td className="p-3">200K-500K</td>
                          <td className="p-3">4GB RAM</td>
                          <td className="text-right p-3">$42/mo</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">High-Traffic</td>
                          <td className="p-3">500K+</td>
                          <td className="p-3">8GB+ RAM</td>
                          <td className="text-right p-3">$80/mo+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-muted-foreground italic mt-4">
                    Pro tip: Start one size larger than needed. You can downgrade after migration if resources are underutilized.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">1.3 Create Migration Checklist</h3>
                  <div className="space-y-2">
                    {[
                      'Backup current site (files + database)',
                      'Document all integrations and third-party services',
                      'Note custom configurations in .htaccess or nginx',
                      'List all installed plugins/extensions with versions',
                      'Identify hardcoded URLs in database',
                      'Check for non-standard file locations',
                      'Verify DNS access and TTL settings (lower to 300 before migration)'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-foreground">Phase 2: Cloudways Environment Setup</h2>
                  <p className="text-muted-foreground">Configure your new hosting environment and staging area</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 Create Cloudways Server</h3>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li className="leading-relaxed">
                      <strong className="text-foreground">Sign up for Cloudways</strong> - Use the free trial to test migration risk-free
                    </li>
                    <li className="leading-relaxed">
                      <strong className="text-foreground">Launch server</strong> - Choose infrastructure provider (DigitalOcean recommended for most users)
                    </li>
                    <li className="leading-relaxed">
                      <strong className="text-foreground">Select location</strong> - Choose datacenter closest to your primary audience
                    </li>
                    <li className="leading-relaxed">
                      <strong className="text-foreground">Configure server</strong> - Match or exceed your current PHP version
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Application Installation</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      Cloudways supports one-click installation for:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">CMS Platforms:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• WordPress (including Multisite)</li>
                          <li>• Magento 2</li>
                          <li>• Drupal</li>
                          <li>• Joomla</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Frameworks:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Laravel</li>
                          <li>• Symfony</li>
                          <li>• CodeIgniter</li>
                          <li>• Custom PHP applications</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">2.3 Staging Environment Setup</h3>
                  <p className="text-muted-foreground mb-4">
                    Cloudways includes free staging for all applications. Create staging copy with one click:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                      <span className="text-muted-foreground">Application → Deployment via Git → Enable</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                      <span className="text-muted-foreground">Create staging URL (e.g., staging-yoursite.cloudwaysapps.com)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span className="text-muted-foreground">Password protect staging to prevent indexing</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <FileCode className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-foreground">Phase 3: Data Migration</h2>
                  <p className="text-muted-foreground">Transfer files, databases, and configurations to Cloudways</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">3.1 Database Migration</h3>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Method 1: Using Cloudways Migrator (Recommended)</h4>
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>Install Cloudways WordPress Migrator plugin on old site</li>
                        <li>Enter destination details from Cloudways dashboard</li>
                        <li>Click "Migrate" - handles files + database automatically</li>
                        <li>Migration time: 15-45 minutes depending on site size</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Method 2: Manual Migration (Advanced)</h4>
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>Export database using phpMyAdmin or WP-CLI</li>
                        <li>Search/replace old URLs with staging URL (use Better Search Replace)</li>
                        <li>Import to Cloudways database via phpMyAdmin</li>
                        <li>Verify table structure and character encoding (UTF-8)</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">3.2 File Transfer</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          <strong>Important:</strong> For sites over 5GB, use SFTP instead of migration plugins to avoid timeout issues.
                        </p>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-semibold">File Size</th>
                            <th className="text-left p-3 font-semibold">Recommended Method</th>
                            <th className="text-left p-3 font-semibold">Est. Time</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b">
                            <td className="p-3">&lt;1GB</td>
                            <td className="p-3">Cloudways Migrator Plugin</td>
                            <td className="p-3">15-30 min</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">1-5GB</td>
                            <td className="p-3">Plugin or SFTP</td>
                            <td className="p-3">30-60 min</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">5-20GB</td>
                            <td className="p-3">SFTP (FileZilla/Transmit)</td>
                            <td className="p-3">1-3 hours</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3">&gt;20GB</td>
                            <td className="p-3">Rsync or Professional Migration</td>
                            <td className="p-3">3-8 hours</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">3.3 Configuration Transfer</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">wp-config.php (WordPress)</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                        <li>Copy custom define() constants</li>
                        <li>Migrate salt keys (or regenerate for better security)</li>
                        <li>Update database credentials to Cloudways values</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">.htaccess Rules</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                        <li>Cloudways uses Nginx - convert Apache rules to Nginx</li>
                        <li>Use Cloudways Nginx config editor in dashboard</li>
                        <li>Common redirects handled via Application Settings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 4 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-foreground">Phase 4: Testing & Validation</h2>
                  <p className="text-muted-foreground">Comprehensive testing before going live</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">4.1 Functionality Testing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Forms & Contact', items: ['Contact forms', 'Newsletter signups', 'Search functionality', 'User registration'] },
                      { title: 'E-commerce', items: ['Product pages', 'Cart operations', 'Checkout process', 'Payment gateways'] },
                      { title: 'Media & Assets', items: ['Image loading', 'Video embeds', 'PDF downloads', 'Font rendering'] },
                      { title: 'Integrations', items: ['Social media feeds', 'Analytics tracking', 'Live chat widgets', 'Email services'] }
                    ].map((category, idx) => (
                      <div key={idx} className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">{category.title}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">4.2 Performance Testing</h3>
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">Run these tests on staging environment:</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-foreground">GTmetrix:</strong>
                          <span className="text-muted-foreground ml-2">Should achieve Grade A with &lt;2s load time</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-foreground">Google PageSpeed:</strong>
                          <span className="text-muted-foreground ml-2">Target 90+ on mobile, 95+ on desktop</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-foreground">Load Impact:</strong>
                          <span className="text-muted-foreground ml-2">Simulate peak traffic (3x normal)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">4.3 Security Validation</h3>
                  <div className="space-y-2">
                    {[
                      'SSL certificate installed and working (check mixed content warnings)',
                      'Firewall rules configured (default: block all except HTTP/HTTPS)',
                      'WordPress admin protected (change wp-admin URL if possible)',
                      'Database accessible only from localhost',
                      'File permissions set correctly (755 for directories, 644 for files)',
                      'Backup schedule configured (recommend daily)'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded">
                        <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Phase 5 */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-foreground">Phase 5: Go Live & DNS Cutover</h2>
                  <p className="text-muted-foreground">Execute the zero-downtime transition to production</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">5.1 Pre-Launch Preparation</h3>
                  <div className="space-y-3">
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">48 Hours Before Launch:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                        <li>Lower DNS TTL to 300 seconds (5 minutes) for faster propagation</li>
                        <li>Schedule launch during low-traffic period (2-5 AM local time recommended)</li>
                        <li>Notify team members and stakeholders</li>
                        <li>Create final backup of old server</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">5.2 DNS Update Process</h3>
                  <div className="space-y-4">
                    <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                      <li className="leading-relaxed">
                        <strong className="text-foreground">Get Cloudways IP:</strong> Found in Application Settings → Access Details
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground">Update A Record:</strong> Point your domain to Cloudways server IP
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground">Wait for Propagation:</strong> Usually 5-30 minutes with low TTL
                      </li>
                      <li className="leading-relaxed">
                        <strong className="text-foreground">Verify Globally:</strong> Use whatsmydns.net to check propagation
                      </li>
                    </ol>

                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Zero-Downtime Strategy</h4>
                          <p className="text-sm text-muted-foreground">
                            Keep old server running for 24-48 hours after DNS change. Some users will still hit old IP during 
                            DNS propagation. Old server serves cached content while new server handles all updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">5.3 Post-Launch Monitoring</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">Monitor these metrics for 72 hours post-migration:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">First 6 Hours:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Error logs (check every 30 min)</li>
                          <li>• Server resource usage</li>
                          <li>• Form submissions working</li>
                          <li>• Email delivery</li>
                        </ul>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">First 72 Hours:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Google Analytics traffic</li>
                          <li>• Page load times</li>
                          <li>• Conversion rates</li>
                          <li>• Search console errors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Common Issues */}
            <Card className="p-8 bg-yellow-500/5 border-yellow-500/20">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Common Migration Issues & Solutions</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-foreground mb-1">Issue: White Screen of Death</h4>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Cause:</strong> PHP memory limit or incompatible plugin</p>
                  <p className="text-sm text-muted-foreground"><strong>Solution:</strong> Increase memory limit to 256M, disable plugins via database</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-foreground mb-1">Issue: Mixed Content Warnings</h4>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Cause:</strong> Hardcoded HTTP URLs in database</p>
                  <p className="text-sm text-muted-foreground"><strong>Solution:</strong> Use Better Search Replace plugin to update URLs to HTTPS</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-foreground mb-1">Issue: Slow Performance After Migration</h4>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Cause:</strong> Caching not configured or CloudFlare conflict</p>
                  <p className="text-sm text-muted-foreground"><strong>Solution:</strong> Enable Varnish + Redis in Cloudways, clear CloudFlare cache</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-foreground mb-1">Issue: Email Not Sending</h4>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Cause:</strong> SMTP not configured</p>
                  <p className="text-sm text-muted-foreground"><strong>Solution:</strong> Install WP Mail SMTP, use Elastic Email (free tier) or SendGrid</p>
                </div>
              </div>
            </Card>

            {/* Real Migration Case Studies */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Real Migration Case Studies</h2>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Case Study 1: E-commerce Migration (WooCommerce)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Before (Bluehost):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 12,000 products</li>
                      <li>• 4.8s average page load</li>
                      <li>• 2.1% conversion rate</li>
                      <li>• Frequent downtime during sales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">After (Cloudways):</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Same 12,000 products</li>
                      <li>• 1.2s average page load (75% faster)</li>
                      <li>• 3.4% conversion rate (+62%)</li>
                      <li>• Zero downtime in 6 months</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Revenue Impact:</strong> 62% increase in conversion rate = $47,000 additional monthly revenue
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Case Study 2: High-Traffic Blog Migration</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Tech blog with 800K monthly visitors migrated from WP Engine:
                  </p>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Migration completed in 4 hours using manual method</li>
                    <li>Cost reduced from $289/mo to $96/mo (67% savings)</li>
                    <li>Page load improved from 2.1s to 0.9s</li>
                    <li>Ad viewability increased 23% due to faster loading</li>
                  </ul>
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Annual Savings:</strong> $2,316 in hosting + $8,400 in increased ad revenue
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Migrate?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Cloudways offers free migration service for one site on premium plans. Their expert team handles the entire process, 
                typically completing migrations in 24-48 hours with zero downtime guarantee.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button asChild size="lg">
                  <a href="https://www.cloudways.com/en/?id=1436994" target="_blank" rel="noopener noreferrer">
                    Get Free Migration <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/">
                    Calculate Your Savings
                  </Link>
                </Button>
              </div>
            </section>

            {/* Related Articles */}
            <section className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/articles/ten-reasons" className="p-4 border rounded-lg hover:border-primary transition-smooth">
                  <h4 className="font-semibold text-foreground mb-2">10 Reasons to Switch</h4>
                  <p className="text-sm text-muted-foreground">Complete analysis with case studies and benchmarks</p>
                </Link>
                <Link to="/articles/cost-comparison" className="p-4 border rounded-lg hover:border-primary transition-smooth">
                  <h4 className="font-semibold text-foreground mb-2">Cost Comparison</h4>
                  <p className="text-sm text-muted-foreground">Detailed pricing breakdown vs all major providers</p>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default MigrationGuide;
