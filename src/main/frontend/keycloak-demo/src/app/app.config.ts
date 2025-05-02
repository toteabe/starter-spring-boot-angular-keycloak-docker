import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { KeycloakService } from './keycloak/keycloak.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptor/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), //https://angular.dev/guide/http/interceptors#di-based-interceptors
    provideHttpClient(// DI-based interceptors must be explicitly enabled.
      withInterceptorsFromDi()),
    provideAppInitializer(() => {
      const kcService = inject(KeycloakService);
      return kcService.init();
    }),
    httpInterceptorProviders,
]
};
