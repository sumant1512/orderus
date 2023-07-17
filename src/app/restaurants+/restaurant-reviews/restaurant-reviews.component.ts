import { Component, Input } from '@angular/core';
import { EHeadingType } from 'src/app/shared/enum/heading-type.enum';
import { IDropdown } from 'src/app/shared/interfaces/dropdown.interface';
import { IRestaurantReviews } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.scss'],
})
export class RestaurantReviewsComponent {
  headingTypeList = EHeadingType;
  reviewList!: Array<IRestaurantReviews>;
  selectedRating: number = 0;
  votesCount: number = 0;
  dropDownList: Array<IDropdown> = [
    { id: 1, name: 'Newest First' },
    { id: 2, name: 'Oldest First' },
  ];

  @Input() set reviews(value: Array<IRestaurantReviews>) {
    this.reviewList = value;
    this.votesCount = this.reviewList.length;
    this.setOverAllRating(this.reviewList);
  }

  reviewBtnClick(event: boolean): void {
    console.log(event);
  }

  setOverAllRating(allRating: Array<IRestaurantReviews>): void {
    const sumOfRatings = allRating.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    this.selectedRating = sumOfRatings / allRating.length;
  }
}
