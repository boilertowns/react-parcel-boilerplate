import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);

root.render(
	<HelmetProvider>
		<BrowserRouter>
			<StrictMode>
				<App />
			</StrictMode>
		</BrowserRouter>
	</HelmetProvider>,
);
