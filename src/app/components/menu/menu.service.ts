import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  allMenus: Menu[] = [
    { name: 'home', isActive: true },
    { name: 'ourMenu', isActive: false },
    {
      name: 'about',
      isActive: false,
    },
    {
      name: 'contact',
      isActive: false,
    },
  ];

  constructor() {}
}
