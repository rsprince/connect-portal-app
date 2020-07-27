import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable()
export class ReportsService implements OnDestroy {
 
  ngOnDestroy(): void {
    console.log("Service destroyed.");
  }
  private dataUrl: string = 'assets/api/reports.json';
  data: any;
 
  constructor(private http: HttpClient) { }
 
  getData() {
    if (this.data) {
      // this.data has a value (getData was already called.)
      return (this.data);
    }
    // this.data has no value (getData has not yet been called.)
    this.data = this.http.get(this.dataUrl);
    console.log("Returning data from service: ");
    console.log(this.data);
    return this.data;
    /*
      NOTE:
      Older `@angular/http` returned an `Observable<Response>`, `@angular/common/http`
      returns an `Observable<Object>`. No more need for `.map(res => res.json())` lines.
    */
  }
}
 
 