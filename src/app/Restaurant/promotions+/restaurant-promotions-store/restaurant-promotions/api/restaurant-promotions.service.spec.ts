import { TestBed } from '@angular/core/testing';

import { RestaurantPromotionsService } from './restaurant-promotions.service';

describe('RestaurantPromotionsService', () => {
  let service: RestaurantPromotionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantPromotionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
