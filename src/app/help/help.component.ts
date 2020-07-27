import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
// import { ReportsCarouselService } from '../reports-carousel/reports-carousel.service';
// import { FmConnectCarouselService } from '../fm-connect-carousel/fm-connect-carousel.service';
 
@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  jobAids: any;
  elearning: any;
  roles: any;
 
  constructor(
    private analyticsService: AnalyticsService,
    // private fmConnectCarouselService: FmConnectCarouselService
   
  ) { }
 
  ngOnInit() {
    let userid = sessionStorage.getItem("userId");
    this.roles = sessionStorage.getItem("userRoles");
    console.log("Roles: ", this.roles);
    // this.getCarouselData(userid, 'jobAids');
    // this.getCarouselData(userid, 'elearning');
    // this.analyticsService.sendEvent("Page", "Help", "load", 1);
  }
 
  /*
   * reportType = 'mostUsed' | 'bestEver', etc.
  */
  // getCarouselData(userid, contentType) {
  //   this.fmConnectCarouselService.getData(userid, contentType)
  //   .subscribe (
  //     data => {
  //       if(contentType == 'jobAids') { this.jobAids = data; }
  //       if(contentType == 'elearning') {
  //         this.elearning = data;
  //         console.log("Elearn: ", this.elearning);
  //         this.elearning  = this.filterContentForAdmin(this.elearning);
  //       }
  //     },
  //     error => console.log(error)
  //   )
  // }
 
  filterContentForAdmin(content) {
    // filter the array, and if an item.type = 'Admin' AND user is Admin, add it.
    let newContent = content.filter(value => {    // newContent will be the content passed in and filtered
      let isAdmin = this.roles.includes("ADMIN"); // boolean, true if roles contains "ADMIN"
      if(value.type == 'Admin' && isAdmin) {      // if each item's type is "Admin" and user is ADMIN
        return true;
      }
      if(value.type != 'Admin') {
        return true;
      }
    });
    return newContent;
  }
}