import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromeHeaderComponent } from './chrome-header.component';

describe('ChromeHeaderComponent', () => {
  let component: ChromeHeaderComponent;
  let fixture: ComponentFixture<ChromeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
