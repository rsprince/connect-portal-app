(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Iab2:function(l,n,u){var t,e;void 0===(e="function"==typeof(t=function(){"use strict";function n(l,n,u){var t=new XMLHttpRequest;t.open("GET",l),t.responseType="blob",t.onload=function(){o(t.response,n,u)},t.onerror=function(){console.error("could not download file")},t.send()}function u(l){var n=new XMLHttpRequest;return n.open("HEAD",l,!1),n.send(),200<=n.status&&299>=n.status}function t(l){try{l.dispatchEvent(new MouseEvent("click"))}catch(n){var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(u)}}var e="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=e.saveAs||"object"!=typeof window||window!==e?function(){}:"download"in HTMLAnchorElement.prototype?function(l,o,i){var s=e.URL||e.webkitURL,a=document.createElement("a");a.download=o=o||l.name||"download",a.rel="noopener","string"==typeof l?(a.href=l,a.origin===location.origin?t(a):u(a.href)?n(l,o,i):t(a,a.target="_blank")):(a.href=s.createObjectURL(l),setTimeout(function(){s.revokeObjectURL(a.href)},4e4),setTimeout(function(){t(a)},0))}:"msSaveOrOpenBlob"in navigator?function(l,e,o){if(e=e||l.name||"download","string"!=typeof l)navigator.msSaveOrOpenBlob(function(l,n){return void 0===n?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Depricated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\ufeff",l],{type:l.type}):l}(l,o),e);else if(u(l))n(l,e,o);else{var i=document.createElement("a");i.href=l,i.target="_blank",setTimeout(function(){t(i)})}}:function(l,u,t,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof l)return n(l,u,t);var i="application/octet-stream"===l.type,s=/constructor/i.test(e.HTMLElement)||e.safari,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||i&&s)&&"object"==typeof FileReader){var r=new FileReader;r.onloadend=function(){var l=r.result;l=a?l:l.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=l:location=l,o=null},r.readAsDataURL(l)}else{var c=e.URL||e.webkitURL,p=c.createObjectURL(l);o?o.location=p:location.href=p,o=null,setTimeout(function(){c.revokeObjectURL(p)},4e4)}};e.saveAs=o.saveAs=o,l.exports=o})?t.apply(n,[]):t)||(l.exports=e)},YSUm:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),i=u("Ip0R"),s=u("26FU"),a=function(){function l(){this.selectedCategory=new s.a({name:"Loan Delivery"})}return l.prototype.current=function(){return this.selectedCategory.asObservable()},l.prototype.change=function(l){this.selectedCategory.next({name:l})},l}(),r=function(){function l(l){this.selectedCategoryService=l}return l.prototype.ngOnInit=function(){this.selected=0,this.getSelectedCategory()},l.prototype.getSelectedCategory=function(){var l=this;this.selectedCategoryService.current().subscribe(function(n){l.selectedCategory=n})},l.prototype.setSelectedCategory=function(l,n){this.selected=n,this.selectedCategoryService.change(l)},l}(),c=t.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"a",[["class","nav-link"]],[[2,"selected-item",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setSelectedCategory(l.context.$implicit,l.context.index)&&t),t},null,null)),(l()(),t.Db(2,null,[" "," "]))],null,function(l,n){l(n,1,0,n.context.index==n.component.selected),l(n,2,0,n.context.$implicit)})}function b(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,2,"h6",[["class","sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Available reports"])),(l()(),t.pb(3,0,null,null,2,"ul",[["class","nav flex-column"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,p)),t.ob(5,278528,null,0,i.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,5,0,n.component.categories)},null)}var d=u("Iab2"),f=function(){function l(){}return l.prototype.ngOnInit=function(){},l.prototype.saveFile=function(l,n){d.saveAs(l,n.substr(0,n.indexOf(" ")))},l}(),g=t.nb({encapsulation:0,styles:[[".report-list[_ngcontent-%COMP%]{margin-bottom:20px}.download-icons[_ngcontent-%COMP%]{float:left;padding:3px;margin-right:10px;width:64px}"]],data:{animation:[{type:7,name:"listAnimation",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:".report-list",animation:{type:6,styles:{opacity:0,transform:"translateY(10%)"},offset:null},options:null},{type:11,selector:".report-list",animation:[{type:12,timings:"350ms",animation:[{type:4,styles:{type:6,styles:{opacity:1,transform:"translateY(0%)"},offset:null},timings:"1s ease-in"}]}],options:null}],options:null}],options:{}}]}});function m(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","download-icons"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"img",[["alt","Download Tableau"],["class","d-inline-block align-top"],["src","../assets/images/ic_tableau.svg"]],null,null,null,null,null))],null,null)}function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","download-icons"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"img",[["alt","Download Text"],["class","d-inline-block align-top"],["src","../assets/images/ic_text.svg"]],null,null,null,null,null))],null,null)}function y(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","download-icons"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"img",[["alt","Download PDF"],["class","d-inline-block align-top"],["src","../assets/images/ic_pdf.svg"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.saveFile("../assets/downloads/test.txt",l.parent.context.$implicit.name)&&t),t},null,null))],null,null)}function w(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","download-icons"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"img",[["alt","Download Excel"],["class","d-inline-block align-top"],["src","../assets/images/ic_xls.svg"]],null,null,null,null,null))],null,null)}function h(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,52,"div",[["class","row report-list"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,51,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Db(3,null,[" "," "])),(l()(),t.pb(4,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),t.Db(5,null,[" "," "])),(l()(),t.pb(6,0,null,null,14,"div",[["class","row accordion-row"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,13,"div",[["class","col-md-12 col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,2,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Db(11,null,[" "," "])),(l()(),t.pb(12,0,null,null,8,"div",[["class","col-md-6 small"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"span",[["class","text-dark font-weight-bold"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Primary Contact:"])),(l()(),t.Db(15,null,[" "," "])),(l()(),t.pb(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,1,"span",[["class","text-dark font-weight-bold"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Last Update:"])),(l()(),t.Db(20,null,[" "," "])),(l()(),t.pb(21,0,null,null,10,"div",[["class","row accordion-row"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,1,"label",[["for","dateFrom"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["From:"])),(l()(),t.pb(25,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,1,"label",[["for","dateTo"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["To:"])),(l()(),t.pb(28,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Formats:"])),(l()(),t.pb(31,0,null,null,0,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,20,"div",[["class","row align-items-center accordion-row"]],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(34,0,null,null,1,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(35,0,null,null,0,"input",[["class","form-control"],["id","dateFrom"],["type","date"]],null,null,null,null,null)),(l()(),t.pb(36,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(37,0,null,null,1,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(38,0,null,null,0,"input",[["class","form-control"],["id","dateTo"],["type","date"]],null,null,null,null,null)),(l()(),t.pb(39,0,null,null,9,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(40,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,m)),t.ob(42,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,v)),t.ob(44,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,y)),t.ob(46,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,w)),t.ob(48,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(49,0,null,null,3,"div",[["class","col-md-3 mt-auto"]],null,null,null,null,null)),(l()(),t.pb(50,0,null,null,2,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(51,0,null,null,1,"button",[["class","btn btn-primary form-control"],["type","date"]],null,null,null,null,null)),(l()(),t.Db(-1,null,[" Submit "]))],function(l,n){var u=n.context.$implicit.formats.indexOf("tableau")>=0;l(n,42,0,u);var t=n.context.$implicit.formats.indexOf("txt")>=0;l(n,44,0,t);var e=n.context.$implicit.formats.indexOf("pdf")>=0;l(n,46,0,e);var o=n.context.$implicit.formats.indexOf("xls")>=0;l(n,48,0,o)},function(l,n){l(n,3,0,n.context.$implicit.name),l(n,5,0,n.context.$implicit.tagline),l(n,11,0,n.context.$implicit.description),l(n,15,0,n.context.$implicit.primaryContact),l(n,20,0,n.context.$implicit.lastUpdate)})}function x(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[],[[24,"@listAnimation",0]],null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,h)),t.ob(3,278528,null,0,i.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,3,0,n.component.reports)},function(l,n){l(n,1,0,n.component.reports.length)})}function O(l){return t.Fb(0,[(l()(),t.gb(16777216,null,null,1,null,x)),t.ob(1,16384,null,0,i.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.reports)},null)}function k(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"reports-list",[],null,null,null,O,g)),t.ob(1,114688,null,0,f,[],null,null)],function(l,n){l(n,1,0)},null)}var C=t.lb("reports-list",f,k,{reports:"reports"},{},[]),D=function(){function l(l){this.http=l,this.dataUrl="assets/api/reports.json"}return l.prototype.ngOnDestroy=function(){console.log("Service destroyed.")},l.prototype.getData=function(){return this.data?this.data:(this.data=this.http.get(this.dataUrl),console.log("Returning data from service: "),console.log(this.data),this.data)},l}(),F=function(){function l(l,n){this.reportsService=l,this.selectedCategoryService=n}return l.prototype.ngOnInit=function(){this.setDefaultCategory(),this.getSelectedCategory()},l.prototype.setDefaultCategory=function(){var l=this;this.reportsService.getData().subscribe(function(n){l.categories=n.categories,l.defaultCategory=l.categories[0],l.getReports(l.defaultCategory)},function(){return console.log("Completed getting default category...")}),this.selectedCategoryService.change(this.defaultCategory)},l.prototype.getSelectedCategory=function(){var l=this;this.selectedCategoryService.current().subscribe(function(n){l.getReports(n.name)},function(l){return console.log(l)},function(){return console.log("Completed getting selected category...")})},l.prototype.getReports=function(l){var n=this;this.reportsService.getData().subscribe(function(u){n.categories=u.categories,n.reports=u[l]},function(l){return console.log(l)},function(){return console.log("Completed getting data...")})},l}(),S=t.nb({encapsulation:0,styles:[[""]],data:{}});function L(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,10,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,3,"nav",[["class","col-md-2 d-none d-md-block bg-light sidebar"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,2,"div",[["class","sidebar-sticky"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"reports-categories",[],null,null,null,b,c)),t.ob(5,114688,null,0,r,[a],{categories:[0,"categories"]},null),(l()(),t.pb(6,0,null,null,4,"main",[["class","col-md-9 ml-sm-auto col-lg-10 px-4"],["role","main"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Db(-1,null,["Reports"])),(l()(),t.pb(9,0,null,null,1,"reports-list",[],null,null,null,O,g)),t.ob(10,114688,null,0,f,[],{reports:[0,"reports"]},null)],function(l,n){var u=n.component;l(n,5,0,u.categories),l(n,10,0,u.reports)},null)}function R(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"reports-home",[],null,null,null,L,S)),t.ob(1,114688,null,0,F,[D,a],null,null)],function(l,n){l(n,1,0)},null)}var j=t.lb("reports-home",F,R,{},{},[]),E=u("t/Na"),I=u("ZYCi"),T=function(){return function(){}}();u.d(n,"ReportsModuleNgFactory",function(){return U});var U=t.mb(e,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[o.a,j,C]],[3,t.j],t.x]),t.wb(4608,i.m,i.l,[t.u,[2,i.u]]),t.wb(4608,E.h,E.n,[i.d,t.B,E.l]),t.wb(4608,E.o,E.o,[E.h,E.m]),t.wb(5120,E.a,function(l){return[l]},[E.o]),t.wb(4608,E.k,E.k,[]),t.wb(6144,E.i,null,[E.k]),t.wb(4608,E.g,E.g,[E.i]),t.wb(6144,E.b,null,[E.g]),t.wb(4608,E.f,E.j,[E.b,t.q]),t.wb(4608,E.c,E.c,[E.f]),t.wb(135680,D,D,[E.c]),t.wb(4608,a,a,[]),t.wb(1073742336,i.b,i.b,[]),t.wb(1073742336,I.m,I.m,[[2,I.s],[2,I.k]]),t.wb(1073742336,T,T,[]),t.wb(1073742336,E.e,E.e,[]),t.wb(1073742336,E.d,E.d,[]),t.wb(1073742336,e,e,[]),t.wb(1024,I.i,function(){return[[{path:"",component:F,children:[{path:"",component:f}]}]]},[]),t.wb(256,E.l,"XSRF-TOKEN",[]),t.wb(256,E.m,"X-XSRF-TOKEN",[])])})}}]);