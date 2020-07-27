import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { APIConstants } from '../config/api-constants';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  // Get Auth code from PING server
  // Get User info, allowed menus
 
  data: any;
  userroles: any;
 
  constructor(private http: HttpClient) { }
 
  getUserData() {
    // add authCode to URL
    var authCode = sessionStorage.getItem("authCode");
    var getUserPages:string = APIConstants.GET_USER_PAGES_URL + authCode;
    // get the user data
    this.data = this.http.get(getUserPages);
    return this.data;
  }
 
}