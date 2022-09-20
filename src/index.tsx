import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// HELPERS
import { logger } from './helpers/logger';

const RenderApp = () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  if (!root) {
    logger({
      type: 'Error',
      message: 'Failed to load root element during application initiailziation.',
    });
    return;
  }
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (document.readyState === 'complete' || document.readyState !== 'loading') RenderApp();
else document.addEventListener('DOMContentLoaded', RenderApp);

export default RenderApp;
