import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { WellcomeComponent } from '../components/wellcome/wellcome.component';
import { AboutComponent } from '../components/about/about.component';
import { BestSellingDishesComponent } from '../components/best-selling-dishes/best-selling-dishes.component';
import { GoalComponent } from '../components/goal/goal.component';
import { PreferenceStatisticsComponent } from '../components/preference-statistics/preference-statistics.component';
import { MenuCatalogComponent } from '../components/menu-catalog/menu-catalog.component';
import { AboutMealsComponent } from '../components/about-meals/about-meals.component';
import { ContactComponent } from '../components/contact/contact.component';
import { MealImagesComponent } from '../components/meal-images/meal-images.component';
import { PriceListComponent } from '../components/price-list/price-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    WellcomeComponent,
    AboutComponent,
    BestSellingDishesComponent,
    GoalComponent,
    PreferenceStatisticsComponent,
    MenuCatalogComponent,
    AboutMealsComponent,
    ContactComponent,
    MealImagesComponent,
    PriceListComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgOptimizedImage,
    FontAwesomeModule,
  ],
})
export class PagesModule {}
