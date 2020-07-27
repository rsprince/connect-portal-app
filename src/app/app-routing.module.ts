import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelpComponent } from './help/help.component';
import { AdminComponent } from './admin/admin.component';

 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: {animation: 'home'} },
 
  { path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard],
    data: {animation: 'home'}
  },
  //Lazy loading Reports module (doesn't need import above)
  {
    path: 'report-center',
    loadChildren: './reports/reports.module#ReportsModule',
    data: {animation: 'reports'}
  },

  { path: 'admin', component: AdminComponent, data: {animation: 'admin'} },

  // { path: 'profile', component: ProfileComponent, data: {animation: 'profile'} },
  { path: 'help', component: HelpComponent, data: {animation: 'help'} },
 
  { path: '**', component: PageNotFoundComponent, data: {animation: '404'} }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 