import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  /*
   * This service logs user events and page loads to Google Analytics
   * and is also set up to log events to a custom API.
  */
  event: any;
  // dataUrl: string = 'https://e64-devl-eb-02-WebAPI.e003.fanniemae.com/api/getUserReports';
  dataUrl: string = '';
  constructor(
    // private googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    private http: HttpClient
  ) { }
 
  sendEvent(category, label, action, value) {
    let name = "FMConnectDemo";
    let userid = localStorage.getItem("userid");
    // this.googleAnalyticsEventsService.emitEvent(
    //   name,
    //   category,
    //   label,
    //   action,
    //   value
    // );
    this.event = name + ', ' + userid + ', ' + category + ', ' + label + ', ' + action + ', ' + value;
    // console.log(this.event);
    // this.postEvent(this.event)
    // .subscribe(
    //   message => console.log(message),
    //   error => console.log(error),
    //   () => console.log("Completed posting event.")
    // );   
  }
 
  postEvent(event) {
    return this.http.post(this.dataUrl, event);
  }
}