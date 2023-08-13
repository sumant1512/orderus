import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedPromotions,
  PromotionActions,
  PromotionActionsUnion,
} from './promotion.actions';
import { IPromotion } from './interfaces/promotion.interface';
import { PromotionService } from './api/promotion.service';

@Injectable()
export class PromotionEffects {
  fetchPromotion$ = createEffect(() =>
    this.action$.pipe(
      ofType(PromotionActions.FETCH_PROMOTIONS),
      mergeMap(() =>
        this.promotionService.fetchPromotions().pipe(
          map((promotionList: IPromotion[]) => {
            return new FetchedPromotions(promotionList);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<PromotionActionsUnion>,
    private promotionService: PromotionService
  ) {}
}
