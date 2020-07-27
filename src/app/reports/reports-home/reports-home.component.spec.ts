import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
 
import { ReportsHomeComponent } from './reports-home.component';
import { ReportsService } from '../reports.service';
// import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SelectedCategoryService } from '../selected-category.service';
 
describe('ReportsHomeComponent', () => {
  let component: ReportsHomeComponent;
  let fixture: ComponentFixture<ReportsHomeComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsHomeComponent ],
      imports: [ HttpClientModule ],
      providers: [
        ReportsService,
        SelectedCategoryService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('.getReports() should be called.', () => {
    let category = 'underwriting';
    spyOn(component, 'getReports').and.callThrough();
    component.getReports(category);
    expect(component.getReports).toHaveBeenCalled();
  });
});