export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Cloudways Calculator 2025 - Compare Real Hosting Costs & Save 40%',
    description: 'Industry-leading Cloudways cost calculator with real provider pricing (Bluehost, SiteGround, HostGator, GoDaddy). See exact savings with charts, migration timeline, and expert comparisons.',
    keywords: 'cloudways calculator, hosting cost comparison 2025, cloud hosting pricing, shared hosting vs cloudways, bluehost vs cloudways, siteground vs cloudways, hosting savings calculator, managed cloud hosting cost',
    ogTitle: 'Cloudways Cost Calculator - Compare Real Hosting Prices 2025',
    ogDescription: 'Calculate exact savings vs Bluehost, SiteGround, HostGator with interactive charts. Free migration, 24/7 support, 3x faster performance.',
    twitterTitle: 'Compare Real Hosting Costs - Cloudways Calculator 2025',
    twitterDescription: 'Interactive calculator shows exact savings vs major providers. See 5-year projections, hidden costs, and migration timeline.'
  },
  '/articles/ten-reasons': {
    title: '10 Proven Reasons to Switch to Cloudways Hosting in 2025',
    description: 'Discover why 50,000+ businesses chose Cloudways over traditional hosting. Speed improvements, cost savings, and expert support that transforms your website performance.',
    keywords: 'cloudways benefits, managed hosting advantages, why choose cloudways, cloudways vs competitors, hosting performance',
    ogTitle: '10 Game-Changing Reasons to Switch to Cloudways',
    ogDescription: 'See why smart businesses are migrating to Cloudways for 3x faster speeds and 40% cost savings.',
    twitterTitle: '10 Reasons Cloudways Beats Traditional Hosting',
    twitterDescription: 'The hosting secrets that transformed 50,000+ websites. Speed, savings, and support that actually works.'
  },
  '/articles/migration-guide': {
    title: 'Complete Cloudways Migration Guide - Zero Downtime in 24 Hours',
    description: 'Step-by-step migration guide to move your website to Cloudways with zero downtime. Includes checklist, timeline, and expert tips for seamless transfer.',
    keywords: 'cloudways migration, website migration guide, hosting migration steps, move to cloudways, migration checklist',
    ogTitle: 'Migrate to Cloudways Without Downtime - Complete Guide',
    ogDescription: 'Professional migration guide used by 1000+ successful transfers. Zero downtime guaranteed.',
    twitterTitle: 'Move to Cloudways in 24 Hours (Zero Downtime)',
    twitterDescription: 'The exact migration process used by pros. Includes free checklist and timeline.'
  },
  '/articles/cost-comparison': {
    title: 'Cloudways vs AWS vs DigitalOcean - Real Cost Comparison 2025',
    description: 'Detailed cost analysis comparing Cloudways, AWS, DigitalOcean, and major hosting providers. See real pricing scenarios and calculate your potential savings.',
    keywords: 'cloudways pricing comparison, hosting cost analysis, cloudways vs aws, cloudways vs digitalocean, hosting price calculator',
    ogTitle: 'Hosting Cost Comparison: Cloudways vs Competitors',
    ogDescription: 'Real data from 1000+ websites shows average 40% savings with Cloudways. See the numbers.',
    twitterTitle: 'Cloudways vs AWS vs DigitalOcean - Price Breakdown',
    twitterDescription: 'Shocking cost comparison reveals which hosting saves you thousands annually.'
  },
  '/vs/bluehost': {
    title: 'Cloudways vs Bluehost 2025: Complete Comparison & Migration Guide',
    description: 'Detailed comparison of Cloudways vs Bluehost with real pricing, performance benchmarks, and migration case studies. See why users save $400+/year switching to Cloudways.',
    keywords: 'cloudways vs bluehost, bluehost alternative, bluehost to cloudways migration, managed cloud hosting comparison',
    ogTitle: 'Cloudways vs Bluehost: Save $400/Year with Better Performance',
    ogDescription: 'Real pricing comparison, migration timeline, and performance benchmarks. Free migration included.',
    twitterTitle: 'Cloudways vs Bluehost 2025 Comparison',
    twitterDescription: 'Detailed analysis shows Cloudways saves $400+/year with 3x faster speeds than Bluehost.'
  },
  '/vs/siteground': {
    title: 'Cloudways vs SiteGround 2025: Which is Better for Your Website?',
    description: 'In-depth comparison of Cloudways vs SiteGround including pricing, features, performance, and real migration case studies. Understand the true costs and benefits.',
    keywords: 'cloudways vs siteground, siteground alternative, siteground to cloudways, cloud hosting comparison',
    ogTitle: 'Cloudways vs SiteGround: Complete Comparison 2025',
    ogDescription: 'Performance tests, pricing analysis, and migration insights. See which hosting wins.',
    twitterTitle: 'Cloudways vs SiteGround Feature Comparison',
    twitterDescription: 'Side-by-side comparison reveals surprising differences in long-term costs and performance.'
  },
  '/vs/hostgator': {
    title: 'Cloudways vs HostGator 2025: Pricing, Performance & Migration',
    description: 'Compare Cloudways vs HostGator with real data on pricing, uptime, speed, and support. Learn why businesses migrate from HostGator to Cloudways.',
    keywords: 'cloudways vs hostgator, hostgator alternative, hostgator migration, cloud hosting vs shared hosting',
    ogTitle: 'Cloudways vs HostGator: Why 1000+ Sites Switched',
    ogDescription: 'Real migration data, pricing comparison, and performance benchmarks.',
    twitterTitle: 'HostGator to Cloudways Migration Guide',
    twitterDescription: 'Complete comparison shows Cloudways advantages in speed, reliability, and long-term value.'
  },
  '/vs/godaddy': {
    title: 'Cloudways vs GoDaddy 2025: Honest Comparison & Reviews',
    description: 'Cloudways vs GoDaddy comparison with actual pricing data, performance tests, and user experiences. Discover why GoDaddy users switch to Cloudways.',
    keywords: 'cloudways vs godaddy, godaddy alternative, godaddy to cloudways, better than godaddy hosting',
    ogTitle: 'Cloudways vs GoDaddy: Performance & Price Comparison',
    ogDescription: 'See real data on uptime, speed, and total cost of ownership over 2-5 years.',
    twitterTitle: 'GoDaddy vs Cloudways 2025',
    twitterDescription: 'Independent comparison reveals which hosting provider offers better value and performance.'
  },
  '/vs/wpengine': {
    title: 'Cloudways vs WP Engine 2025: Feature & Price Comparison',
    description: 'Compare Cloudways vs WP Engine for WordPress hosting. See pricing, features, performance benchmarks, and which offers better value for your needs.',
    keywords: 'cloudways vs wp engine, wpengine alternative, wordpress managed hosting comparison, cloudways wpengine',
    ogTitle: 'Cloudways vs WP Engine: WordPress Hosting Showdown',
    ogDescription: 'Premium WordPress hosting comparison with pricing, features, and real performance data.',
    twitterTitle: 'WP Engine vs Cloudways Comparison',
    twitterDescription: 'Which managed WordPress host provides better value? Detailed comparison with benchmarks.'
  },
  '/vs/kinsta': {
    title: 'Cloudways vs Kinsta 2025: Premium Hosting Head-to-Head',
    description: 'Cloudways vs Kinsta detailed comparison covering pricing, infrastructure, support, and performance. See which premium WordPress host suits your needs.',
    keywords: 'cloudways vs kinsta, kinsta alternative, premium wordpress hosting, managed hosting comparison',
    ogTitle: 'Cloudways vs Kinsta: Premium WordPress Hosting Compared',
    ogDescription: 'Feature-by-feature comparison of two leading managed WordPress hosts.',
    twitterTitle: 'Kinsta vs Cloudways 2025',
    twitterDescription: 'Premium hosting comparison: pricing, performance, and features analyzed in detail.'
  }
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];