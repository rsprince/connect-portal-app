import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AnalyticsService } from '../services/analytics.service';
 
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {id: ""};
  invalidFeedback: boolean;
 
  constructor(
    private _authService: AuthService,
    private analyticsService: AnalyticsService
  ) { }
 
  ngOnInit() {
    this.invalidFeedback = false;
  }
 
  login() {
    if(this.model.id) {
      // call authService.login method, pass in userid from login
      let user = this.model.id;
      console.log("user: ", user);
      // this._authService.login(user);
      this.analyticsService.sendEvent("Button", "Login", "click", 2);
    } else {
      this.invalidFeedback = true;
    }
    return true;
  }
 
  loginAdmin() {
    if(this.model.id) {
      let user = this.model.id;
      // this._authService.loginAdmin(user);
      this.analyticsService.sendEvent("Button", "Admin Login", "click", 2);
    } else {
      this.invalidFeedback = true;
    }
    return true;
  }
 
}