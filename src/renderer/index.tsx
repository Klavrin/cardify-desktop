import { createRoot } from 'react-dom/client';
import App from './App';

import ThemeProvider from './components/theme-provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
