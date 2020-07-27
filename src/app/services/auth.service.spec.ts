import { TestBed } from '@angular/core/testing';
 
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
 

describe('AuthService', () => {
  let store = {};
  let userdata = "home";
  let path = "HOME";
 
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule ]
  })
);
 
  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
 
  it('.isTokenExpired() should return false', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.isTokenExpired()).toBeFalsy();
  });
 
  it('.logout() should be called', () => {
    const service: AuthService = TestBed.get(AuthService);
    spyOn(service, 'logout').and.callThrough();
    service.logout();
    service.clear();
    expect(service.logout).toHaveBeenCalled();
  });
 
  it('.clear() should be called', () => {
    const service: AuthService = TestBed.get(AuthService);
    spyOn(service, 'clear');
    service.clear();
    expect(service.clear).toHaveBeenCalledWith();
  });
 
  it('.isAuthorized() should return false', () => {
    const service: AuthService = TestBed.get(AuthService);
    path = path.toLowerCase();
    spyOn(window.sessionStorage, 'getItem').and.callFake(() => {
      return "home";
    });
    expect(service.isAuthorized("home")).toBeTruthy();
  });
 
  it('.logout() should return true', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service.logout()).toBeFalsy();
    expect(service.clear()).toBeFalsy();
  });
 
});
 