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
    title: 'Cloudways Savings Calculator - Save 40% on Cloud Hosting Costs',
    description: 'Cut your cloud hosting costs by 40% with our proven Cloudways savings calculator. Compare prices, get instant estimates, and see why 50,000+ businesses switched.',
    keywords: 'cloudways savings, cloud hosting calculator, hosting cost comparison, cloudways pricing, managed hosting savings',
    ogTitle: 'Save 40% on Cloud Hosting - Cloudways Calculator',
    ogDescription: 'Join 50,000+ businesses saving thousands on cloud hosting. Get instant cost comparison and migration guide.',
    twitterTitle: 'Cut Cloud Hosting Costs by 40% Today',
    twitterDescription: 'Free calculator shows exactly how much you can save switching to Cloudways managed hosting.'
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