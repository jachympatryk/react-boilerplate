import { LoginPage, LandingPage } from 'pages';
import { RouteConfig } from 'types';
import { LANDING_PAGE, LOGIN_PAGE } from 'config/routes.config';

export const routes: RouteConfig[] = [
  { ...LANDING_PAGE, component: LandingPage },
  { ...LOGIN_PAGE, component: LoginPage },
];
