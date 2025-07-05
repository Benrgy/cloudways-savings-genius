
import React from 'react';

const LoadingSpinner = () => {
  return (
      <div className="min-h-screen gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Loading Cloudways Savings Calculator</h2>
          <p className="text-muted-foreground">Please wait while we prepare your calculator...</p>
        </div>
      </div>
  );
};

export default LoadingSpinner;
