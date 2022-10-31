import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddNewPropertyComponent } from './components/add-new-property/add-new-property.component';
import { AddTenantComponent } from './components/add-tenant/add-tenant.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import{NewUserComponent} from './components/new-user/new-user.component'
import { PropertyContactRequestsComponent } from './components/property-contact-requests/property-contact-requests.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { TenantsListComponent } from './components/tenants-list/tenants-list.component';
import {MostarpersonasComponent} from './mostarpersonas/mostarpersonas.component';
import {ActualizarpersonasComponent} from './actualizarpersonas/actualizarpersonas.component';
import {MenuclienteComponent} from './menucliente/menucliente.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
 
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path:'signup',
    component:NewUserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'mostrarpersonas',
    component:MostarpersonasComponent
  },
    {
      path:'actualizarpersonas',
      component:ActualizarpersonasComponent
    },
    {
      path:'menucliente',
      component:MenuclienteComponent
    },

  { 
    path: '**', 
    redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
