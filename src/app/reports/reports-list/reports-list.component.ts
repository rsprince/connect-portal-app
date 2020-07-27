import { Component, OnInit, Input } from '@angular/core';
 
import * as FileSaver from 'file-saver';
import { listAnimation } from 'src/app/animations';
 
@Component({
  selector: 'reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
  animations: [ listAnimation ],
})
export class ReportsListComponent implements OnInit {
  @Input() reports: any;
 
  constructor() { }
 
  ngOnInit() {
  }
 
  saveFile(path, name) {
    FileSaver.saveAs(path, name.substr(0, name.indexOf(' '))); 
  }
 
}