import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthKitProvider } from '@workos-inc/authkit-react';

import App from './app';

// ----------------------------------------------------------------------

if (!import.meta.env.VITE_WORKOS_CLIENT_ID) {
  throw new Error('VITE_WORKOS_CLIENT_ID is not defined');
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <AuthKitProvider clientId={import.meta.env.VITE_WORKOS_CLIENT_ID}>
        <BrowserRouter>
          <Suspense>
            <App />
          </Suspense>
        </BrowserRouter>
      </AuthKitProvider>
    </HelmetProvider>
  </StrictMode>
);
