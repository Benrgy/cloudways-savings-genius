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
  }
};

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];