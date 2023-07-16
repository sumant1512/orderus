import { Component, Input } from '@angular/core';
import { IRestaurantReviews } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.scss'],
})
export class RestaurantReviewsComponent {
  @Input() reviews!: IRestaurantReviews[];
  selectedRating = 3;

  reviewBtnClick(event: boolean): void {
    console.log(event);
  }
}
