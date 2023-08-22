import { Component, Input } from '@angular/core';
import { ETabCode } from 'src/app/Restaurant/promotions+/restaurant-promotions-store/restaurant-promotions/enum/restaurant-promotions.enum';
import { IRestaurantPromotions } from 'src/app/Restaurant/promotions+/restaurant-promotions-store/restaurant-promotions/interfaces/restaurant-promotions.interface';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss'],
})
export class PromotionCardComponent {
  @Input() promotionCard!: IRestaurantPromotions;

  status = ETabCode;
}
