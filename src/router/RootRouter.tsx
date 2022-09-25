import { type RouteObject, useRoutes } from 'react-router-dom';
import { NotFoundPage } from '../pages/404';
import { HomePage } from '../pages/home';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		// When no routes matches, show 404 page.
		path: '*',
		element: <NotFoundPage />,
	},
];

export const RootRouter = () => {
	const element = useRoutes(routes);
	return element;
};
