import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from '../keycloak/keycloak.service';


@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  kcService = inject(KeycloakService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.kcService.keycloak?.authenticated) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${this.kcService.keycloak?.token}` }
      });
    }
    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
