import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingDishesComponent } from './best-selling-dishes.component';

describe('BestSellingDishesComponent', () => {
  let component: BestSellingDishesComponent;
  let fixture: ComponentFixture<BestSellingDishesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestSellingDishesComponent]
    });
    fixture = TestBed.createComponent(BestSellingDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
