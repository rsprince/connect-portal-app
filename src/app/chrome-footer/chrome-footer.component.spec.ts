import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromeFooterComponent } from './chrome-footer.component';

describe('ChromeFooterComponent', () => {
  let component: ChromeFooterComponent;
  let fixture: ComponentFixture<ChromeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
