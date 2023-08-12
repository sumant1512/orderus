import { TestBed } from '@angular/core/testing';

import { KebabActionService } from './kebab-action.service';

describe('KebabActionService', () => {
  let service: KebabActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KebabActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
