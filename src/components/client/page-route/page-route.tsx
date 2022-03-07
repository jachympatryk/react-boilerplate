import React from 'react';
import { Navigate } from 'react-router-dom';

import { Page } from 'components';
import { RouteConfig } from 'types';

export const PageRoute: React.FC<RouteConfig> = ({ component: Component, showNavigation, auth }) => {
  const isAuthenticated = true;

  // todo: replace with constants
  if (auth && !isAuthenticated) return <Navigate to="/login" />;

  return (
    <Page showNavigation={showNavigation}>
      <Component />
    </Page>
  );
};
