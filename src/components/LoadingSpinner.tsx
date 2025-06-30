
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Cloudways Savings Calculator</h2>
        <p className="text-gray-600">Please wait while we prepare your calculator...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
