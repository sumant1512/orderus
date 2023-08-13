import { Component, Input } from '@angular/core';
import { EPromotionStatus } from 'src/app/store/promotion/enum/promotion.enum';
import { IPromotion } from 'src/app/store/promotion/interfaces/promotion.interface';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss'],
})
export class PromotionCardComponent {
  @Input() promotionCard!: IPromotion;

  status = EPromotionStatus;
}
