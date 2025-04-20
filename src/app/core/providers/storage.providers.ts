import {InjectionToken} from '@angular/core';

export const AUTH_STORAGE_PREFIX = new InjectionToken<string>('AUTH_STORAGE_PREFIX', {
  providedIn: 'root',
  factory: () => '_auth_token_',
});
