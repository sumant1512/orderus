import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFooterComponent } from './delivery-footer.component';

describe('DeliveryFooterComponent', () => {
  let component: DeliveryFooterComponent;
  let fixture: ComponentFixture<DeliveryFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryFooterComponent],
    });
    fixture = TestBed.createComponent(DeliveryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
