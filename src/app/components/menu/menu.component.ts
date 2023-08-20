import { Component, Input } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() set openMenu(value: boolean) {
    this._openMenu = value;
  }

  get openMenu() {
    return this._openMenu;
  }

  private _openMenu = false;
  menus: Menu[];
  constructor(private menuService: MenuService) {
    this.menus = menuService.allMenus;
  }

  selectMenu(menu: Menu) {
    this.menus.map((menu) => (menu.isActive = false));
    menu.isActive = true;
  }
}
