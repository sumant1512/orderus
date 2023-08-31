import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAction } from '../restaurant-shared/interfaces/action.interface';
import { ActionList } from '../restaurant-shared/constants/actions';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';
import { IRestaurantPromotions } from './restaurant-promotions-store/interfaces/restaurant-promotions.interface';
import { RestaurantPromotionsFacade } from './restaurant-promotions-store/restaurant-promotions.facade';

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
    // this.restaurantPromotionsFacade.fetchRestaurantPromotions();
  }

  ngOnInit(): void {
    this.getPromotionsList();
  }

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
    this.restaurantPromotionsFacade.fetchRestaurantPromotions(
      selectedSection.code || ETabCode.ACTIVE
    );
  }

  getPromotionsList(): void {
    this.subscription.add(
      this.restaurantPromotionsFacade.restaurantPromotionListState.subscribe(
        (promotionList) => {
          this.promotionsList = promotionList;
        }
      )
    );
  }
}
