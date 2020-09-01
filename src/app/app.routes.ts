import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // content module once the user is logged
  { path: 'home', component: HomeComponent, loadChildren: () => import('./modules/content/content.module').then(m => m.ContentModule)},
  { path: 'login', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash : true });