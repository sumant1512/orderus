import { TestBed } from '@angular/core/testing';

import { ChefOrdersService } from './chef-orders.service';

describe('ChefOrdersService', () => {
  let service: ChefOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
