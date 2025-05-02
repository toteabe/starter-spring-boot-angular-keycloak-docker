import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { canActivate } from './guard/authguard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [ { path: '', redirectTo: 'demo', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'demo', component: DemoComponent, canActivate: [canActivate] },
    ];
