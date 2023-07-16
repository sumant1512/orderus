import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRestaurantCardDetail } from '../../interfaces/restaurant-card-details.interface';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent {
  @Input() restaurantCardDetails!: IRestaurantCardDetail;
  @Output() onCardClick = new EventEmitter<number>();

  greyCartImage = './../../../../assets/restaurant-card/cart-grey.png';
  blueCartImage = './../../../../assets/restaurant-card/cart-blue.png';

  cardClick(id: number): void {
    if (id) {
      this.onCardClick.emit(id);
    }
  }
}
