import { Component, Input } from '@angular/core';
import { IDropdown } from 'src/app/shared/interfaces/dropdown.interface';
import { IRestaurantReviews } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.scss'],
})
export class RestaurantReviewsComponent {
  @Input() reviews!: IRestaurantReviews[];
  selectedRating = 3;

  dropDownList: Array<IDropdown> = [
    { id: 1, name: 'Newest First' },
    { id: 2, name: 'Oldest First' },
  ];

  reviewBtnClick(event: boolean): void {
    console.log(event);
  }
}
