import { Component, OnInit, Input } from '@angular/core';
import { SelectedCategoryService } from '../selected-category.service';
 
@Component({
  selector: 'reports-categories',
  templateUrl: './reports-categories.component.html',
  styleUrls: ['./reports-categories.component.scss']
})
export class ReportsCategoriesComponent implements OnInit {
  // gets categories from reportsHome
  @Input() categories: any;
  selectedCategory: string;
  selected: any;
 
  constructor(
    private selectedCategoryService: SelectedCategoryService
  ) { }
 
  ngOnInit() {
    this.selected = 0;
    this.getSelectedCategory();
  }
 
  // get the current category
  getSelectedCategory() {
    this.selectedCategoryService.current()
    .subscribe(category => {
      this.selectedCategory = category;
    });
  }
 
  // set the category
  setSelectedCategory(name, index) {
    this.selected = index;
    this.selectedCategoryService.change(name);
  }
 
}