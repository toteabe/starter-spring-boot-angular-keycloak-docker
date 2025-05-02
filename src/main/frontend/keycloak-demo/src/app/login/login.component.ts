import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeycloakService } from '../keycloak/keycloak.service';

@Component({
  selector: 'app-login',
  imports:  [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent implements OnInit {
  
  
  kcService = inject(KeycloakService);
  router = inject(Router);

  async ngOnInit(): Promise<void> {
    await this.kcService.init();
    await this.kcService.login();
  }

 
}
