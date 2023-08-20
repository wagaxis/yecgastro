import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menus: Menu[];
  constructor(private menuService: MenuService) {
    this.menus = menuService.allMenus;
  }
}
