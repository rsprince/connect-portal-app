import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
 
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
 
  it('.login() should return true', () => {
    expect(component.login()).toBeTruthy();
  });
 
  it('.loginAdmin() should return true', () => {
    expect(component.loginAdmin()).toBeTruthy();
  });
});
 
 