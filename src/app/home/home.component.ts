import { Component, OnInit } from '@angular/core';
// import { AnalyticsService } from '../services/analytics.service';
import { Router } from '@angular/router';
// import { FmConnectCarouselService } from '../fm-connect-carousel/fm-connect-carousel.service';
 
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /*
   * To add a carousel:
   *  - instantiate a report variable
   *  - onInit(), call getCarouselData(reportType)
   *  - Add conditional to getCarouselData()
   *  - In reportsCarouselService:
   *    - add reference to report API in api-constants
   *    - add conditional to getData()
   *  - Add URL to api-constants.ts
   */
 
  mostUsedReports: any;
  othersViewedReports: any;
  model: any = {search: ""};
  mostUsed: any;

  constructor(
    // private analyticsService: AnalyticsService,
    private routeService: Router,
    // private fmConnectCarouselService: FmConnectCarouselService
  ) { }
 
  ngOnInit() {
   
    let userid = sessionStorage.getItem("userId");
    // this.getCarouselData(userid, 'mostUsed');
    // this.getCarouselData(userid, 'othersViewed');
 
    // this.analyticsService.sendEvent("Page", "Home", "load", 1);
    let imperonsationFlag= localStorage.getItem("isImpersonationActive");
    let alreadyRefresh= localStorage.getItem("alreadyRefreshed");
    if(imperonsationFlag!=null && imperonsationFlag=='true' && (alreadyRefresh==null || alreadyRefresh=='false')){
      localStorage.setItem("alreadyRefreshed","true");
      window.location.reload(true);
    }
  }

  search() {
    alert("Searching for: " + this.model.search);
  }

  testFn(value) {
    console.log("Selected: ", value);
  }
 
  /*
   * TODO:
   * - write a service with method that will increment a welcome flag.
   * - write another method that will check the flag (service)
   * NOTE: service can be put right in this home folder
   *
   * - In this file, write a function to call the service, methods
   * - getWelcomeCount()
   * - incrementWelcomeCount()
   * - in constructor, instantiate welcomeService
   * - in markup, set a condition
   */
 

  /*
   * reportType = 'mostUsed' | 'othersViewed', etc.
  */
  // getCarouselData(userid, reportType) {
  //   this.fmConnectCarouselService.getData(userid, reportType)
  //   .subscribe (
  //     data => {
  //       if(reportType == 'mostUsed') { this.mostUsed = data; }
  //     },
  //     error => console.log(error)
  //   )
  // }
}