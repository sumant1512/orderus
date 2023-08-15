import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
import { RestaurantPromotionsFacade } from './restaurant-promotions-store/restaurant-promotions/restaurant-promotions.facade';
import { ERestaurantPromotionsStatus } from './restaurant-promotions-store/restaurant-promotions/enum/restaurant-promotions.enum';
import { IRestaurantPromotions } from './restaurant-promotions-store/restaurant-promotions/interfaces/restaurant-promotions.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAction } from '../restaurant-shared/interfaces/action.interface';
import { ActionList } from '../restaurant-shared/constants/actions';

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
  selectedPromotionId!: number;
  actionList: Array<IAction> = ActionList;
  selectedAction: IAction = ActionList[0];

  constructor(
    private restaurantPromotionsFacade: RestaurantPromotionsFacade,
    private modalService: NgbModal
  ) {
    this.restaurantPromotionsFacade.fetchRestaurantPromotions();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  action($event: IAction, modalName: any, modalSize?: string): void {
    this.selectedAction = $event;
    this.open(modalName, modalSize);
  }

  open(modal: any, modalSize?: string): void {
    if (modalSize) {
      this.modalService.open(modal, { windowClass: modalSize });
    } else {
      this.modalService.open(modal);
    }
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
