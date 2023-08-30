import { TestBed } from '@angular/core/testing';

import { BestSellingDishesService } from './best-selling-dishes.service';

describe('BestSellingDishesService', () => {
  let service: BestSellingDishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestSellingDishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
