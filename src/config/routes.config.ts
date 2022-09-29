import { LandingPage, LoginPage } from "pages";
import { RouteConfig } from "types";
import { LANDING_PAGE, LOGIN_PAGE } from "constants/routes.constants";

export const routes: RouteConfig[] = [
  { ...LANDING_PAGE, component: LandingPage },
  { ...LOGIN_PAGE, component: LoginPage },
];
