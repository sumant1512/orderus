import { Component, Input } from '@angular/core';
import { IRestaurantPromotions } from 'src/app/Restaurant/promotions+/restaurant-promotions-store/interfaces/restaurant-promotions.interface';
import { ETabCode } from '../../enum/tab-code.enum';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss'],
})
export class PromotionCardComponent {
  @Input() promotionCard!: IRestaurantPromotions;

  status = ETabCode;
}
