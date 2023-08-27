import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  aboutFoods: string[] = [
    'assets/images/about-food-3.webp',
    'assets/images/about-food-4.webp',
    'assets/images/about-food-3.webp',
    'assets/images/about-food-4.webp',
    'assets/images/about-food-3.webp',
    'assets/images/about-food-4.webp',
  ];
}
