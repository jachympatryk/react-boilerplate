import React from 'react';
import { Navigate } from 'react-router-dom';

import { Page } from 'components';
import { RouteConfig } from 'types';
import { LOGIN_PAGE } from 'constants/routes.constants';

export const PageRoute: React.FC<RouteConfig> = ({ component: Component, showNavigation, auth }) => {
  const isAuthenticated = true;

  if (auth && !isAuthenticated) return <Navigate to={LOGIN_PAGE.path} />;

  return (
    <Page showNavigation={showNavigation}>
      <Component />
    </Page>
  );
};
