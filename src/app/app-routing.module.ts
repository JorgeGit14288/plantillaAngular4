import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importamos los componentes
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// creamos el arreglo de routers
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
