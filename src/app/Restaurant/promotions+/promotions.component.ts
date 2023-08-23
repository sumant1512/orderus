import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
import { RestaurantPromotionsFacade } from './restaurant-promotions-store/restaurant-promotions/restaurant-promotions.facade';
import { IRestaurantPromotions } from './restaurant-promotions-store/restaurant-promotions/interfaces/restaurant-promotions.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAction } from '../restaurant-shared/interfaces/action.interface';
import { ActionList } from '../restaurant-shared/constants/actions';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  sectionList: Array<ITab> = [
    { id: 1, name: 'Active', code: ETabCode.ACTIVE },
    { id: 2, name: 'Scheduled', code: ETabCode.SCHEDULED },
    { id: 1, name: 'Expired', code: ETabCode.EXPIRED },
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
        .restaurantPromotionByStatus(selectedSection.code as ETabCode)
        .subscribe((promotionList) => {
          this.promotionsList = promotionList;
        })
    );
  }
}
