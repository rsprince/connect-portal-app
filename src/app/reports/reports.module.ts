import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
 
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsHomeComponent } from './reports-home/reports-home.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { ReportsCategoriesComponent } from './reports-categories/reports-categories.component';
import { ReportsService } from './reports.service';
import { SelectedCategoryService } from './selected-category.service';
 
@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    HttpClientModule
  ],
  declarations: [
    ReportsHomeComponent,
    ReportsListComponent,
    ReportsCategoriesComponent
  ],
  providers: [
    ReportsService,
    SelectedCategoryService
  ]
})
export class ReportsModule { }