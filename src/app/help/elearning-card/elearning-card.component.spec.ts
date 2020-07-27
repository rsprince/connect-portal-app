import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElearningCardComponent } from './elearning-card.component';

describe('ElearningCardComponent', () => {
  let component: ElearningCardComponent;
  let fixture: ComponentFixture<ElearningCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElearningCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElearningCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
