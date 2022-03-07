import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ProviderProps } from './providers.types';

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
