import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { SelectedCategoryService } from '../selected-category.service';
 
@Component({
  selector: 'reports-home',
  templateUrl: './reports-home.component.html',
  styleUrls: ['./reports-home.component.scss']
})
export class ReportsHomeComponent implements OnInit {
  data: {};
  reports: any;
  categories: any;
  defaultCategory: any;
 
  constructor(
    private reportsService: ReportsService,
    private selectedCategoryService: SelectedCategoryService
  ) { }
 
  ngOnInit() {
    this.setDefaultCategory();
    this.getSelectedCategory(); // listens for changes
  }
 
  //get a default category and populate it.
  setDefaultCategory() {
    // get the data set.
    this.reportsService.getData()
    .subscribe(
      data => {
        // get list of categories.
        this.categories = data['categories'];
        // get the first one.
        this.defaultCategory = this.categories[0];
        // get reports for this category
        this.getReports(this.defaultCategory);
      },
      () => console.log("Completed getting default category...")
    );
    // change the selected category to the default using the service
    this.selectedCategoryService.change(this.defaultCategory);
  }
 
  // get selected category, calls getReports for selected category
  getSelectedCategory() {
    this.selectedCategoryService.current()
    // subscribe to selected category
    .subscribe(
      data => {
        // get reports for category name
        this.getReports(data.name);
      },
      error => console.log(error),
      () => console.log("Completed getting selected category...")
    )
  }

  getReports(category) {
    this.reportsService.getData()
    .subscribe(
      // returns onNext, onError, onComplete
      // data => this.data = data,
      data => {
        // console.log("Reports Component: ", data);
        // get categories
        this.categories = data['categories'];
        // get reports for the selected category
        this.reports = data[category];
      },
      error => console.log(error),

      () => console.log("Completed getting data...")
    )
  }
}