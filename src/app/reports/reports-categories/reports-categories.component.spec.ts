import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsCategoriesComponent } from './reports-categories.component';

describe('ReportsCategoriesComponent', () => {
  let component: ReportsCategoriesComponent;
  let fixture: ComponentFixture<ReportsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
