import {ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import { KeycloakService } from "../keycloak/keycloak.service";


export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const kcService = inject(KeycloakService) ;
  const router = inject(Router);

  return !kcService.keycloak?.isTokenExpired() || router.createUrlTree(['/login']);
}
