import { Injectable } from '@angular/core';
import { IBestSellingDishes } from './best-selling-dishes';

@Injectable({
  providedIn: 'root',
})
export class BestSellingDishesService {
  bestSellingDishes: IBestSellingDishes[] = [
    {
      name: 'Kadın Budu Köfte',
      image: 'assets/images/best-selling-dishes-1.webp',
      alt: 'Kadın Budu Köfte',
      sort: 1,
    },
    {
      name: 'Tavuk Kül Bastı',
      image: 'assets/images/best-selling-dishes-2.webp',
      alt: 'Tavuk Kül Bastı',
      sort: 2,
    },
    {
      name: 'Hünkâr Beğendi',
      image: 'assets/images/best-selling-dishes-3.webp',
      alt: 'Hünkar Beğendi',
      sort: 3,
    },
    {
      name: 'Karnı Yarık',
      image: 'assets/images/best-selling-dishes-4.webp',
      alt: 'Karnı Yarık',
      sort: 4,
    },
    {
      name: 'Orman Kebabı',
      image: 'assets/images/best-selling-dishes-5.webp',
      alt: 'Kadın Budu Köfte',
      sort: 5,
    },
  ];
  constructor() {}

  getBestSellingDishes(): IBestSellingDishes[] {
    return this.bestSellingDishes;
  }
}
