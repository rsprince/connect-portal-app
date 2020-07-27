import { TestBed } from '@angular/core/testing';
 
import { MenuService } from './menu.service';
 
describe('MenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
 
  it('should be created', () => {
    const service: MenuService = TestBed.get(MenuService);
    expect(service).toBeTruthy();
  });
 
  it('.buildMenu() should return a menu', () => {
    const service: MenuService = TestBed.get(MenuService);
    let data = {mainMenu: ["home", "reports"]};
    let menu = data.mainMenu;
    let menuItem = {list: ["home", "reports"]};
    expect(service.buildMenu(data)).toBeDefined();
  });
});