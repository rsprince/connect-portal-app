import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReportsModule } from './reports.module';
 
/*
  This service is used to pass the selected category
  from the left nav menu to the report list component.
*/
 
@Injectable()
export class SelectedCategoryService {
 
  // instantiate and set default category
  private selectedCategory = new BehaviorSubject<any>({"name": "Loan Delivery"});
 
  constructor() { }
 
  // get the current category
  current() {
    return this.selectedCategory.asObservable();
  }
 
  // set the category
  change(name: string) {
    this.selectedCategory.next({"name": name});
  }
}