import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  
  // Route configuration for breadcrumbs
  const routeConfig: Record<string, BreadcrumbItem[]> = {
    '/': [],
    '/articles/ten-reasons': [
      { label: 'Articles', path: '/articles' },
      { label: '10 Reasons to Switch to Cloudways', path: '/articles/ten-reasons' }
    ],
    '/articles/migration-guide': [
      { label: 'Articles', path: '/articles' },
      { label: 'Migration Guide', path: '/articles/migration-guide' }
    ],
    '/articles/cost-comparison': [
      { label: 'Articles', path: '/articles' },
      { label: 'Cost Comparison', path: '/articles/cost-comparison' }
    ],
    '/comparison/providers': [
      { label: 'Comparisons', path: '/comparison' },
      { label: 'Provider Comparison', path: '/comparison/providers' }
    ]
  };

  const breadcrumbs = routeConfig[location.pathname] || [];
  
  // Don't show breadcrumbs on homepage
  if (breadcrumbs.length === 0) {
    return null;
  }

  // Generate Schema.org BreadcrumbList markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cloudwayssavinggenius.netlify.app/"
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.label,
        "item": `https://cloudwayssavinggenius.netlify.app${crumb.path}`
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center flex-wrap gap-2 text-sm text-muted-foreground">
          <li className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-1 hover:text-primary transition-smooth"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>
          
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
                {isLast ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link 
                    to={crumb.path} 
                    className="hover:text-primary transition-smooth"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
