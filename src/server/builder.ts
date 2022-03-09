import { FetchBuilder } from '@better-typed/hyper-fetch';

import { ServerErrorType } from './server.types';
import { environment } from 'config/environment.config';
import { REFRESH_TOKEN_STORAGE_FIELD } from 'constants/auth.constants';

export const builder = new FetchBuilder<ServerErrorType>({ baseUrl: environment.serverUrl })
  .setDebug(true)
  .onError(async (res, command) => {
    const [, , status] = res;
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_STORAGE_FIELD);
    const isLoginEndpoint = command.endpoint.includes('login');

    if (status === 401 && !isLoginEndpoint && !command.used && refreshToken) {
      /* handle refresh token request */
    }
    return res;
  })
  .setQueryParamsOptions({
    arrayFormat: 'comma',
    skipEmptyString: true,
  })
  .onAuth((command) => {
    /*
      const state = store.getState();
      const authToken = state.auth.token;
    */
    const authToken = '';

    return command.setHeaders({
      ...command.headers,
      Authorization: `Bearer ${authToken}`,
    });
  })
  .build();
