import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { PlatoFormComponent } from './plato-form/plato-form';
import { RegisterComponent } from './components/register/register';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path: '', component: Home},
    {path:'menu', component: Menu},
    { path: 'nuevo-plato', component: PlatoFormComponent },
    { path: 'registro', component: RegisterComponent },
  { path: 'login', component: Login },
];
