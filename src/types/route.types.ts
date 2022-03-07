import React from 'react';

export interface RouteConfig {
  path: string;
  component: React.FC<unknown>;
  name: string;
  auth: boolean;
  showNavigation: boolean;
}
