import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chrome-header',
  templateUrl: './chrome-header.component.html',
  styleUrls: ['./chrome-header.component.scss']
})
export class ChromeHeaderComponent implements OnInit {
  @Input() userName: any;
  @Input() menu: any;

  constructor() { }

  ngOnInit() {
    console.log("chrome menu: ", this.menu);
  }

}
