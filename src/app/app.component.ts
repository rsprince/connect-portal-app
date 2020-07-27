import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from './animations';
import { UserService } from './services/user.service';
import { MenuService } from './services/menu.service';
import { Router } from '@angular/router';
import { urlEndpoints } from '../environments/environment';
import {CurrencyPipe} from '@angular/common';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {
  data: any;
  userid: string;
  menu: any;
  isImpersonationActive: string;
  currentImpersonatedUser: string;
  userName: any;
  reports: any;
  logoutUrl: String;
  //loginCount: any;
  //lastLoginDate: Date;
  showWelcome: any;

  value: any;
 
  constructor(
    private currencyPipe: CurrencyPipe,
    private authService: AuthService,
    private userService: UserService,
    private menuService: MenuService,
    // private googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    // private analyticsService: AnalyticsService,
    private router: Router,
    // private reportsCarouselService: ReportsCarouselService
  ) { }
 
  redirectIfNotLoggedIn() {
 
    var currentUrl: string = window.location.href;
    // NOTE: Added hash (#) to URL in app-routing.module
    // If no code, hasn't redirected to Ping yet.
 
    // No #, no code: going directly to site, need to clear "deepLink"
    if ((currentUrl.indexOf("/#/") < 0) && (currentUrl.indexOf("code") < 0)) {
      localStorage.setItem("deepLink", "");
    }
    // Yes #, but no code
    if ((currentUrl.indexOf("/#/") > -1) && (currentUrl.indexOf("code") < 0)) {
      var deepLink = currentUrl.substring(currentUrl.indexOf("/#/") + 3, currentUrl.length);
      localStorage.setItem("deepLink", deepLink);
    }
    if (currentUrl.indexOf('code') < 0) {
    //  window.location.href = urlEndpoints[window.location.hostname].loginUrl;
    } else {
      var codePos = currentUrl.search("code=");
      var authCode = currentUrl.substring(codePos + 5, currentUrl.length);
      sessionStorage.setItem("authCode", authCode);
    }
 
  }
  ngOnInit() {
    this.value = 1234;
    this.value = this.currencyPipe.transform(this.value, 'USD');
    console.log("Currency: ", this.value);
    this.redirectIfNotLoggedIn();
 
    this.deepLink();
    this.userService.getUserData()
      .subscribe(
        data => {
          /*
           * 'userdata' used in auth guard to check allowed paths.
           * Get object, put into a string, remove spaces from menu names.
           * Put into a session storage variable.
           */
          // get user roles and store it in the session
          sessionStorage.setItem("userRoles", data['userRoles']);
          let userFirstName = data['firstName'];
          let userLastName = data['lastName'];
          let userId = data['userId'];
          let userName = data['userName'];
          this.userName = userName;
          let loginCount = data['loginCount'];
          let lastLoginDate = data['lastLoginDate'];
          sessionStorage.setItem("userId", userId);
          sessionStorage.setItem("loginCount", loginCount);
          sessionStorage.setItem("lastLoginDate", lastLoginDate);
          sessionStorage.setItem("userId", userId);
          //let loginCount = data['loginCount'];
          //sessionStorage.setItem("loginCount", loginCount);
          //let lastLoginDate = data['lastLoginDate'];
          //sessionStorage.setItem("lastLoginDate", lastLoginDate);
          let showWelcome = data['showWelcome'];
          sessionStorage.setItem("showWelcome", showWelcome);
 
          sessionStorage.setItem("userName", userName);
          let filteredData = JSON.stringify(data);
          filteredData = filteredData.split(' ').join('-');
          sessionStorage.setItem('userdata', filteredData);
          // Build the menu bar.
          this.menu = this.menuService.buildMenu(data);
          console.log("menu - app: ", this.menu);
          this.setUser(userFirstName, userLastName);
        },
        error => console.log(error)
      )
    // this.getUser();
    // this.googleAnalyticsEventsService.createTracker('UA-68575240-3', 'FMConnectDemo');
    // this.analyticsService.sendEvent("Page", "App", "load", 1);
 
    let imperonsationFlag = localStorage.getItem("isImpersonationActive");
    if (imperonsationFlag == null || imperonsationFlag == 'false') {
      this.isImpersonationActive = "false";
    } else {
      this.isImpersonationActive = "true";
      this.currentImpersonatedUser = localStorage.getItem("currentImpersonatedUser").toString();
      this.currentImpersonatedUser = this.currentImpersonatedUser.toUpperCase();
    }
  }
 
  stopUserImpersonation() {
    localStorage.setItem("isImpersonationActive", "false");
    localStorage.setItem("currentImpersonatedUser", '');
    this.router.navigate(['/admin/run-as-user']);
  }
 
  deepLink() {
    let deepLink = localStorage.getItem("deepLink");
    deepLink = '/' + deepLink;
    this.router.navigate([deepLink]);
  }
 
  handleProfile(){
    this.router.navigate(['/profile']);
  }
 
  logout() {
    this.authService.logout();
    return true;
  }
 
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
 
  setUser(firstname, lastname) {
    this.menuService.changeUser(firstname, lastname);
  }
 
  getUser() {
    this.menuService.currentUser()
    .subscribe(
      data => {
        this.userName = data;
      },
      error => console.log(error)
    );
  }
 
  // user links to be shown when the profile drop-dpwn is clicked
  userLinks = [
    {
      label: 'Profile',
      // icon: 'fmi fmi-user',
      command: () => {this.handleProfile();}
    },
    // {
    //   label: 'Sign Out',
    //   url: urlEndpoints[window.location.hostname].logoutUrl
    // }
  ];
 
  // Help links to be shown when the profile drop-dpwn is clicked
  helpLinks = [
    {
      title: "Help Center",
      url: ""
    },
    {
      title: "Contact Us",
      url: ""
    }
  ]
 
  // External App links to be shown when the profile drop-dpwn is clicked
  appLinks = [
  ];
}
 