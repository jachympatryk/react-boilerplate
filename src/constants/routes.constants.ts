import { RouteConstant } from "types";

export const LANDING_PAGE: RouteConstant = {
  path: "/",
  name: "Main page",
  auth: false,
  showNavigation: true,
};

export const LOGIN_PAGE: RouteConstant = {
  path: "/login",
  name: "Login",
  auth: false,
  showNavigation: false,
};
