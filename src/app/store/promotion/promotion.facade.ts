import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as promotionSelector from './promotion.selectors';
import { IPromotion } from './interfaces/promotion.interface';
import { FetchPromotions, FetchedPromotions } from './promotion.actions';

@Injectable({ providedIn: 'root' })
export class PromotionFacade {
  promotionListState: Observable<IPromotion[]> = this.store.select(
    promotionSelector.fetchPromotionList
  );

  constructor(private store: Store<AppState>) {}

  fetchPromotion() {
    this.store.dispatch(new FetchPromotions());
  }

  fetchedPromotions(promotionList: IPromotion[]) {
    this.store.dispatch(new FetchedPromotions(promotionList));
  }
}
