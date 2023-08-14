import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
import { RestaurantPromotionsFacade } from './restaurant-promotions-store/restaurant-promotions/restaurant-promotions.facade';
import { ERestaurantPromotionsStatus } from './restaurant-promotions-store/restaurant-promotions/enum/restaurant-promotions.enum';
import { IRestaurantPromotions } from './restaurant-promotions-store/restaurant-promotions/interfaces/restaurant-promotions.interface';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  sectionList: Array<ITab> = [
    { id: 1, name: 'Active', code: ERestaurantPromotionsStatus.ACTIVE },
    { id: 2, name: 'Scheduled', code: ERestaurantPromotionsStatus.SCHEDULED },
    { id: 1, name: 'Expired', code: ERestaurantPromotionsStatus.EXPIRED },
  ];
  promotionsList!: Array<IRestaurantPromotions>;

  constructor(private restaurantPromotionsFacade: RestaurantPromotionsFacade) {
    this.restaurantPromotionsFacade.fetchRestaurantPromotions();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSelectedPromotion(selectedSection: ITab): void {
    this.subscription.add(
      this.restaurantPromotionsFacade
        .restaurantPromotionByStatus(
          selectedSection.code || ERestaurantPromotionsStatus.ACTIVE
        )
        .subscribe((promotionList) => {
          this.promotionsList = promotionList;
        })
    );
  }
}
