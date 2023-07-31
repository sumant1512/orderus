import { Component, Input } from '@angular/core';
import { IRestaurantReviews } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';
import { IImage } from '../../interfaces/image.interface';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent {
  @Input() reviewDetails!: IRestaurantReviews;
  @Input() isLast!: boolean;

  likeImg: IImage = {
    img: './../../../../assets/like.svg',
    imgAlt: 'Like',
  };

  trasnparentLikeImg: IImage = {
    img: './../../../../assets/like-transparent.svg',
    imgAlt: 'Like',
  };
}
