import { Component, HostListener } from '@angular/core';
import { BestSellingDishesService } from './best-selling-dishes.service';
import { DirectionEnum, IBestSellingDishes } from './best-selling-dishes';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-best-selling-dishes',
  templateUrl: './best-selling-dishes.component.html',
  styleUrls: ['./best-selling-dishes.component.scss'],
})
export class BestSellingDishesComponent {
  sliderItems: IBestSellingDishes[] =
    this.bestSellingDishesService.getBestSellingDishes();

  faArrowRight = faAngleRight;
  faArrowLeft = faAngleLeft;

  maxItemShow: number = this.sliderItems?.length ?? 0;
  screenWidth: number = window.innerWidth;
  // TODO: Telefon numarasını servisten alacak şekilde değiştirmelisin.
  phoneNumber: string = '905332964958';

  DirectionEnum = DirectionEnum;

  constructor(private bestSellingDishesService: BestSellingDishesService) {}

  get getShowCount(): number {
    if (this.screenWidth >= 1300) {
      this.maxItemShow = this.sliderItems?.length ?? 0;
    } else if (this.screenWidth >= 992) {
      this.maxItemShow = 4;
    } else if (this.screenWidth >= 768) {
      this.maxItemShow = 3;
    } else if (this.screenWidth >= 576) {
      this.maxItemShow = 2;
    } else {
      this.maxItemShow = 1;
    }
    return this.maxItemShow;
  }

  @HostListener('window:resize', ['$event'])
  getScreenWidth() {
    this.screenWidth = window.innerWidth;
  }

  sliderDrag(direction: DirectionEnum) {
    if (direction === DirectionEnum.Left) {
      this.sliderItems.unshift(<IBestSellingDishes>this.sliderItems.pop());
    } else {
      this.sliderItems.push(<IBestSellingDishes>this.sliderItems.shift());
    }
  }

  takePrice(item: IBestSellingDishes) {
    if (this.screenWidth > 768) {
      window.open(
        `https://web.whatsapp.com/send/?phone=${this.phoneNumber}&text&type=phone_number&app_absent=0&text=Selam, ${item.name} için fiyat teklifi alabilir miyim?`,
        '_blank',
        'noopener noreferrer',
      );
    } else {
      window.open(
        `https://api.whatsapp.com/send/?phone=${this.phoneNumber}&text&type=phone_number&app_absent=0&text=Selam, ${item.name} için fiyat teklifi alabilir miyim?`,
        '_blank',
        'noopener noreferrer',
      );
    }
  }
}
