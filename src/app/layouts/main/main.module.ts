import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PagesModule } from '../../pages/pages.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule, PagesModule],
})
export class MainModule {}
