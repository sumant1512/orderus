import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
import { EPromotionStatus } from 'src/app/store/promotion/enum/promotion.enum';
import { IPromotion } from 'src/app/store/promotion/interfaces/promotion.interface';
import { PromotionFacade } from 'src/app/store/promotion/promotion.facade';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  sectionList: Array<ITab> = [
    { id: 1, name: 'Active', code: EPromotionStatus.ACTIVE },
    { id: 2, name: 'Scheduled', code: EPromotionStatus.SCHEDULED },
    { id: 1, name: 'Expired', code: EPromotionStatus.EXPIRED },
  ];
  promotionsList!: Array<IPromotion>;

  constructor(private promotionFacade: PromotionFacade) {
    this.promotionFacade.fetchPromotion();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSelectedPromotion(selectedSection: ITab): void {
    this.subscription.add(
      this.promotionFacade
        .promotionByStatus(selectedSection.code || EPromotionStatus.ACTIVE)
        .subscribe((promotionList) => {
          this.promotionsList = promotionList;
        })
    );
  }
}
