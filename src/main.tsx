
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('main.tsx loading...');
console.log('Environment:', import.meta.env.MODE);
console.log('Base URL:', import.meta.env.BASE_URL);

// Add performance monitoring
const startTime = performance.now();

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('Root element not found!');
  throw new Error('Root element with id "root" not found');
}

console.log('Root element found, creating React root...');

try {
  const root = createRoot(rootElement);
  console.log('React root created, rendering App...');
  
  root.render(<App />);
  
  const endTime = performance.now();
  console.log(`App rendered successfully in ${endTime - startTime}ms`);
} catch (error) {
  console.error('Failed to render React app:', error);
  
  // Fallback error display
  rootElement.innerHTML = `
    <div style="text-align: center; margin-top: 50px; font-family: Arial, sans-serif;">
      <h2 style="color: #dc3545;">Application Error</h2>
      <p>Failed to load the Cloudways Savings Calculator.</p>
      <p>Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
      <button onclick="window.location.reload()" style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Refresh Page
      </button>
    </div>
  `;
}
