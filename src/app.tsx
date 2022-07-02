import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageRoute } from 'components';
import { routes } from 'config';

import './assets/styles/app.scss';

export const App: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} element={<PageRoute {...route} />} />
      ))}
    </Routes>
  );
};
