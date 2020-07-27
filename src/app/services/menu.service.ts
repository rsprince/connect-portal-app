import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: any;
  private selectedUser = new BehaviorSubject<any>({"firstName": " ", "lastName": " "});
 
  constructor() { }
 
  currentUser() {
    return this.selectedUser.asObservable();
  }
 
  changeUser(firstName: string, lastName: string) {
    this.selectedUser.next({"firstName": firstName, "lastName": lastName});
    return true;
  }
 
  buildMenu(data) {
    // Put into 'menu' each item from 'allMenu' that are in the pages array from API.
    let pages = data.mainMenu;
    console.log("Pages: ", pages);
    let menu = this.allMenu.filter(val => pages.indexOf(val.name) > -1);
    menu.forEach(menuItem => {
      // For each menuItem's 'list' property (the submenu items), filter with
      // the data property corresponding to each menu item.
      menuItem.list = menuItem.list.filter(subMenuItem => data[menuItem.name].indexOf(subMenuItem.name) > -1);
    });
    console.log("Menu: ", menu);
    return menu;
  }
 
  allMenu = [
    {
      name: "Home",
      title: "Home",
      url: "/home",
      list: [],
      exactMatch: true
    },
    {
      name: "Report Center",
      title: "Report Center",
      url: "/report-center",
      list: [],
      exactMatch: true
    },
    {
      name: "Message Manager",
      title: "Message Manager",
      url: "/message-manager",
      list: [],
      exactMatch: true
    },
    {
      name: "Admin",
      title: "Administration",
      url: "/admin",
      list: [
        {
          name: "View Lender Configuration",
          title: "Lender Configuration",
          url: "/admin/view-lender-configuration",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Obtain Site Analytics",
          title: "Site Analytics",
          url: "/admin/obtain-site-analytics",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Assign Reports to External Roles",
          title: "Assign Reports - External",
          url: "/admin/assign-reports-to-external-roles",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Run As User",
          title: "Run As User",
          url: "/admin/run-as-user",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Import Metadata",
          title: "Import Metadata",
          url: "/admin/import-metadata",
          list: [ ],
          exactMatch: true
        },
        {
          name: "On-board Corp Code",
          title: "On-board Corp Code",
          url: "/admin/on-board-corp-code",
          list: [ ],
          exactMatch: true
        },     
        {
          name: "Report Management",
          title: "Report Management",
          url: "/admin/report-management",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Report Metadata",
          title: "Report Metadata",
          url: "/admin/report-metadata",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Approve Reports",
          title: "Approve Reports",
          url: "/admin/approve-reports",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Announcements",
          title: "Announcements",
          url: "/admin/announcements",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Manage Report Categories",
          title: "Manage Report Categories",
          url: "/admin/manage-report-categories",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Manage User Access",
          title: "Manage User Access",
          url: "/admin/manage-user-access",
          list: [ ],
          exactMatch: true
        },
        {
          name: "Manage Restricted Report Access",
          title: "Manage Restricted Report Access",
          url: "/admin/manage-restricted-report-access",
          list: [ ],
          exactMatch: true
        }
       ],
      exactMatch: true
    },
    {
      name: "Help Center",
      title: "Help Center",
      url: "/help",
      list: [],
      exactMatch: true
    },
    {
      name: "Download Center",
      title: "Downloads",
      url: "/downloads",
      list: [],
      exactMatch: true
    },
    {
     name: "Profile",
      title: "Profile",
      url: "/profile",
      list: [],
      exactMatch: true
    },
    {
      name: "API",
      title: "API",
      url: "/api",
      list: [],
      exactMatch: true
    }
  ]
}
 