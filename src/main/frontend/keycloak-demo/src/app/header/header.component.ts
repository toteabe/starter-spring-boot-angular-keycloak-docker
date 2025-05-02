import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import { StorageService } from '../service/storage.service';
import { KeycloakService } from '../keycloak/keycloak.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {

  isLoggedIn  = false;

  constructor( private keycloakService: KeycloakService ,private router: Router) {
  }

  async logout() {
    await this.keycloakService.keycloak?.logout();
  
    this.isLoggedIn = false;
    this.router.navigate(['/login']).then(
      () => {console.log('Logout OK, cargando login...')}
    )
  }

  ngOnInit(): void {
    
  }


}
