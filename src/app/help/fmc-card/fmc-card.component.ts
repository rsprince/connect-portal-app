import {Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';
// import { HeaderTemplate, FooterTemplate } from '@fm-ui-adk/components/adk';
 
// This is a copied component(fm-cards) from ADK library
// CSS has been customized for this component for project specific design
@Component({
  selector: 'fmc-card',
  templateUrl: './fmc-card.component.html',
  styleUrls: ['./fmc-card.component.scss']
})
export class FmcCardComponent implements OnInit {
  @Input() viewDesc: string;
 
  @Input() title: string;
 
  @Input() imgSrc: string;
 
  @Input() image: boolean;
 
  @Input() altTxt: string;
 
  @Input() pointer: string;
 
  @Input() subtitle: string;
 
  @Input() style: any;
 
  @Input() styleClass: string;
 
  // @ContentChild(HeaderTemplate) header;
 
  // @ContentChild(FooterTemplate) footer;
 
  constructor(private el: ElementRef) { }
 
  getBlockableElement(): HTMLElement  {
      return this.el.nativeElement.children[0];
  }



  ngOnInit() {
  }
}
