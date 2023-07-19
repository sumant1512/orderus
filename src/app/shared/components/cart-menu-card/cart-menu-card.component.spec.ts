import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMenuCardComponent } from './cart-menu-card.component';

describe('CartMenuCardComponent', () => {
  let component: CartMenuCardComponent;
  let fixture: ComponentFixture<CartMenuCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartMenuCardComponent]
    });
    fixture = TestBed.createComponent(CartMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
