import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile.interface';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  // Keycloak instance
  private _keycloak: Keycloak | undefined;
  private _userProfile: UserProfile | undefined;


  get keycloak() {

    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost:9090',
        realm: 'demo',
        clientId: 'cliente-demo'
      })
    }
    return this._keycloak;

  }

  get userProfile() {
    return this._userProfile;
  }

  constructor() { }

  async init() {

    const authenticated = await this.keycloak?.init({
      onLoad: 'login-required',
    });

    if (authenticated) { 
      console.log('Authenticated');
      this._userProfile = (await this.keycloak?.loadUserProfile() as UserProfile);
      this._userProfile.token = this.keycloak?.token;
    }

    // return authenticated;
  }

  login() {
    this.keycloak?.login();
  }
  logout() {
    this.keycloak?.logout({redirectUri: 'http://localhost:4200'});
  }
  // isLoggedIn() {
  //   return this.keycloak?.authenticated;
  // }
  // isTokenExpired() {
  //   return this.keycloak?.isTokenExpired();
  // }
  // getToken() {  
  //   return this.keycloak?.token;
  // }
  // getUsername() {     
  //   return this.keycloak?.tokenParsed?['preferred_username'];
  // }
  // getUserId() {     
  //   return this.keycloak?.tokenParsed?['sub'];
  // }
  // getUserEmail() {      
  //   return this.keycloak?.tokenParsed?['email'];
  // }
  // getUserRoles() {      
  //   return this.keycloak?.tokenParsed?['realm_access']?.roles;
  // }
  // getUserGroups() {   
  //   return this.keycloak?.tokenParsed?['groups'];
  // }
}
