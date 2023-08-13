import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITab } from 'src/app/shared/interfaces/tabs.interface';
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
    { id: 1, name: 'Active', code: 'active' },
    { id: 2, name: 'Scheduled', code: 'scheduled' },
    { id: 1, name: 'Expired', code: 'expired' },
  ];
  promotionsList!: Array<IPromotion>;

  constructor(private promotionFacade: PromotionFacade) {
    this.promotionFacade.fetchPromotion();
  }

  ngOnInit(): void {
    this.getPromotionsWithSection();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPromotionsWithSection(): void {
    this.subscription.add(
      this.promotionFacade.promotionListState.subscribe((promotionList) => {
        this.promotionsList = promotionList;
      })
    );
  }

  getSelectedPromotion(selectedSection: ITab): void {
    console.log(selectedSection);
  }
}
