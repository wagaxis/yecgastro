import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  allMenus: Menu[] = [
    { name: 'Home', isActive: true },
    { name: 'ourMenu', isActive: false },
    {
      name: 'About',
      isActive: false,
    },
    {
      name: 'Contact',
      isActive: false,
    },
  ];

  constructor() {}
}
