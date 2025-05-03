import { Component, inject } from '@angular/core';
import { DemoService } from '../service/demo.service';
import { KeycloakService } from '../keycloak/keycloak.service';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  demoService = inject(DemoService);
  kcService = inject(KeycloakService);
  data: any = null;

  ngInit() {
    this.demoService.getData().subscribe(
      (response: any) => {
        this.data = response;
      }    
    );
  }

  logout() {
    this.kcService.logout();
  }

  accountManagement() {
    this.kcService.accountManagement();
  }
  
  getData() {
    this.demoService.getData().subscribe(
      (response: any) => {
        this.data = JSON.stringify(response);
      }
    );
  }

}
