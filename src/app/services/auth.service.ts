import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import * as decode from 'jwt-decode';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;
  private path: string = "";
 
  constructor(private _router: Router) { }
 
  clear() {
    sessionStorage.clear();
    return false;
  }
 
  /**
  * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthorized(path): boolean {
    let token = "";
    token = sessionStorage.getItem('userdata');
    if(token) { token = token.toLowerCase() }
    let userdata = token;
    if(path) { path = path.toLowerCase() }
    // if userdata is not null and the path is in the userdata string.
    if(userdata != null && userdata.indexOf(path) >= 0) {
      return true;
    }
    return false;
  }
 
  isTokenExpired(): boolean {
    return false;
  }
 
  logout() {
    this.clear();
    this._router.navigate(['/home']);
    return false;
  }
 
  getRoles() {
    return sessionStorage.getItem('roles');
  }
 
}
 