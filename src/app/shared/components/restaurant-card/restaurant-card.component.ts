import { Component, Input } from '@angular/core';
import { IRestaurantCardDetail } from '../../interfaces/restaurant-card-details.interface';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent {
  @Input() restaurantCardDetails!: IRestaurantCardDetail;

  greyCartImage = './../../../../assets/restaurant-card/cart-grey.png';
  blueCartImage = './../../../../assets/restaurant-card/cart-blue.png';
}
