import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmcCardComponent } from './fmc-card.component';

describe('FmcCardComponent', () => {
  let component: FmcCardComponent;
  let fixture: ComponentFixture<FmcCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmcCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
