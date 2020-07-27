import { TestBed, inject } from '@angular/core/testing';
 
import { AuthService } from '../services/auth.service';
import { AuthGuard } from './auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getTestBed } from '@angular/core/testing';
 
describe('AuthGuard', () => {
 
  let injector: TestBed;
  let authService: AuthService
  let guard: AuthGuard;
  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/cookies'};
  let routerMock = {navigate: jasmine.createSpy('navigate')}
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthGuard, { provide: Router, useValue: routerMock }, ],
      imports: [ HttpClientTestingModule ]
    });
    injector = getTestBed();
    authService = injector.get(AuthService);
    guard = injector.get(AuthGuard);
  });
 
  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
 
  it('.canActivate() should redirect an unauthenticated user to the "page not found" route', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/404']);
  });
 
  it('.canActivate() should allow the authenticated user to access app', () => {
    spyOn(authService, 'isAuthorized').and.returnValue(true);
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });
 
});