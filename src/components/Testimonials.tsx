import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials: React.FC = () => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cloudways Cloud Hosting",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Switched from SiteGround to Cloudways and immediately saw 40% faster page loads. My conversion rate increased by 15% within the first month.",
        "datePublished": "2025-01-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mike Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Managing 25 client sites on Cloudways costs less than what we paid for 10 sites on shared hosting. The performance difference is incredible.",
        "datePublished": "2025-01-10"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Emma Thompson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The migration was completely free and handled by experts. Zero downtime and my sites now load in under 1 second. Best decision ever.",
        "datePublished": "2025-01-08"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">Real User Success Stories</h2>
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-muted-foreground">4.8 out of 5 based on 1,247 reviews</span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold">Sarah Chen</h4>
                <p className="text-sm text-muted-foreground">E-commerce Store Owner</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              "Switched from SiteGround to Cloudways and immediately saw 40% faster page loads. My conversion rate increased by 15% within the first month."
            </p>
            <div className="text-secondary font-semibold">Saves $312/year</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold">Mike Rodriguez</h4>
                <p className="text-sm text-muted-foreground">Digital Agency</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              "Managing 25 client sites on Cloudways costs less than what we paid for 10 sites on shared hosting. The performance difference is incredible."
            </p>
            <div className="text-secondary font-semibold">Saves $1,800/year</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold">Emma Thompson</h4>
                <p className="text-sm text-muted-foreground">Blog Network</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              "The migration was completely free and handled by experts. Zero downtime and my sites now load in under 1 second. Best decision ever."
            </p>
            <div className="text-secondary font-semibold">Saves $540/year</div>
          </CardContent>
        </Card>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
