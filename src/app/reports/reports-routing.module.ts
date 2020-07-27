import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsHomeComponent } from './reports-home/reports-home.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
 
const routes: Routes = [
  {path: '', component: ReportsHomeComponent, children: [
    { path: '', component: ReportsListComponent }
 
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }