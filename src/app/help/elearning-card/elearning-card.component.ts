import { Component, OnInit, Input } from '@angular/core';
 
@Component({
  selector: 'elearning-card',
  templateUrl: './elearning-card.component.html',
  styleUrls: ['./elearning-card.component.scss']
})
export class ElearningCardComponent implements OnInit {
  @Input() content: any;
  @Input() viewDesc: string;
  role: any;
 
  constructor() { }
 
  ngOnInit() {
    this.role = sessionStorage.getItem('userRoles');
  }
 
}
 
 