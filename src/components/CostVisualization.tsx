import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CostVisualizationProps {
  cloudwaysCost: number;
  currentProviderCost: number;
  providerName: string;
}

const CostVisualization: React.FC<CostVisualizationProps> = ({
  cloudwaysCost,
  currentProviderCost,
  providerName
}) => {
  // Generate 5-year projection data
  const projectionData = Array.from({ length: 5 }, (_, i) => {
    const year = i + 1;
    // Shared hosting typically increases 10-15% per year after year 2
    const providerMultiplier = year === 1 ? 1 : (year === 2 ? 2.5 : 2.5 + ((year - 2) * 0.12));
    
    return {
      year: `Year ${year}`,
      cloudways: cloudwaysCost * 12 * year,
      provider: Math.round(currentProviderCost * 12 * providerMultiplier * (year === 1 ? 1 : year - 0.5))
    };
  });

  // Monthly comparison data
  const monthlyData = [
    { category: 'Hosting', cloudways: cloudwaysCost, provider: currentProviderCost },
    { category: 'SSL Certs', cloudways: 0, provider: 5.99 },
    { category: 'Backups', cloudways: 0, provider: 2.99 },
    { category: 'CDN', cloudways: 0, provider: 9.99 },
    { category: 'Support', cloudways: 0, provider: 0 }
  ];

  const totalSavings = projectionData[4].provider - projectionData[4].cloudways;
  const yearOneSavings = (currentProviderCost * 12) - (cloudwaysCost * 12);

  return (
    <div className="space-y-6 mb-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Your Cost Savings Visualized</h2>
        <p className="text-xl text-muted-foreground">
          See exactly how much you'll save over time by switching to Cloudways
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="gradient-secondary">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-secondary-foreground mb-2">
              ${yearOneSavings.toFixed(0)}
            </div>
            <div className="text-sm text-secondary-foreground/80">Year 1 Savings</div>
          </CardContent>
        </Card>
        <Card className="gradient-hero">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-foreground mb-2">
              ${(projectionData[2].provider - projectionData[2].cloudways).toFixed(0)}
            </div>
            <div className="text-sm text-primary-foreground/80">3-Year Savings</div>
          </CardContent>
        </Card>
        <Card className="gradient-primary">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-foreground mb-2">
              ${totalSavings.toFixed(0)}
            </div>
            <div className="text-sm text-primary-foreground/80">5-Year Savings</div>
          </CardContent>
        </Card>
      </div>

      {/* 5-Year Cost Projection */}
      <Card>
        <CardHeader>
          <CardTitle>5-Year Total Cost Projection</CardTitle>
          <p className="text-sm text-muted-foreground">
            Cumulative costs including typical renewal price increases for shared hosting
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => `$${value.toFixed(0)}`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cloudways" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                name="Cloudways"
                dot={{ fill: 'hsl(var(--primary))', r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="provider" 
                stroke="hsl(var(--destructive))" 
                strokeWidth={3}
                name={providerName}
                dot={{ fill: 'hsl(var(--destructive))', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Cost Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Cost Breakdown by Feature</CardTitle>
          <p className="text-sm text-muted-foreground">
            Hidden costs add up quickly with traditional hosting
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => `$${value.toFixed(2)}`}
              />
              <Legend />
              <Bar dataKey="cloudways" fill="hsl(var(--primary))" name="Cloudways (All Included)" />
              <Bar dataKey="provider" fill="hsl(var(--destructive))" name={`${providerName} (Extra Costs)`} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span className="text-primary">💡</span>
          Why Cloudways Saves You Money
        </h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• <strong>No renewal price increases:</strong> Shared hosting providers typically 2-3x prices after year 1</li>
          <li>• <strong>All features included:</strong> SSL, CDN, backups, and premium support at no extra cost</li>
          <li>• <strong>Pay-as-you-grow:</strong> Scale resources up or down without penalty</li>
          <li>• <strong>Dedicated resources:</strong> No "noisy neighbor" performance degradation</li>
          <li>• <strong>Enterprise performance:</strong> 3x faster load times improve conversion rates 15-30%</li>
        </ul>
      </div>
    </div>
  );
};

export default CostVisualization;
