import { Component, inject } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {throwError} from "rxjs";
import { StorageService } from '../service/storage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports:  [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  authService = inject(AuthService);
  storageService = inject(StorageService);
  router = inject(Router);

  form: any = {
    username: null,
    password: null,
    email: null,
    rol: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  ngOnInit(): void {

  }

  onSubmit(): void {
    const { username, password, email, rol } = this.form;

    this.authService.register(username, password, email, rol).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(['/login']).then(
          () => {console.log('Register OK, cargando login...')}
        )
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

}
