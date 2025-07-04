
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('Root element not found!');
  throw new Error('Root element with id "root" not found');
}

try {
  const root = createRoot(rootElement);
  root.render(<App />);
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
