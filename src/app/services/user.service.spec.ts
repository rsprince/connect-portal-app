import { TestBed } from '@angular/core/testing';
 
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
 
describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ HttpClient, HttpHandler ]
  }));
 
  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
 
  it('.getUserData() should return data', () => {
    const service: UserService = TestBed.get(UserService);
    let getUserPages = '/someurl.json';
    expect(service.getUserData()).toBeDefined();
  });
});