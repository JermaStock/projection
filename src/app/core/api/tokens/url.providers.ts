import {InjectionToken} from '@angular/core';

export const PROJECTS_API_URI = new InjectionToken<string>('PROJECTS_API_URI', {
  providedIn: 'root',
  factory: () => '/music-data-storage/api',
});
