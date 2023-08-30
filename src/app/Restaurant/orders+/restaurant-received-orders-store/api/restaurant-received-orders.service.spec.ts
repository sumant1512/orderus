import { TestBed } from '@angular/core/testing';

import { RestaurantReceivedOrdersService } from './restaurant-received-orders.service';

describe('RestaurantReceivedOrdersService', () => {
  let service: RestaurantReceivedOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantReceivedOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
