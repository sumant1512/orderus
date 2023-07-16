import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantReviewsComponent } from './restaurant-reviews.component';

describe('RestaurantReviewsComponent', () => {
  let component: RestaurantReviewsComponent;
  let fixture: ComponentFixture<RestaurantReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantReviewsComponent]
    });
    fixture = TestBed.createComponent(RestaurantReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
