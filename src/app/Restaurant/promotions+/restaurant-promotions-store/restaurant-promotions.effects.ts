import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedRestaurantPromotions,
  RestaurantPromotionsActions,
  RestaurantPromotionsActionsUnion,
} from './restaurant-promotions.actions';
import { IRestaurantPromotions } from './interfaces/restaurant-promotions.interface';
import { RestaurantPromotionsService } from './api/restaurant-promotions.service';

@Injectable()
export class RestaurantPromotionsEffects {
  fetchRestaurantPromotions$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantPromotionsActions.FETCH_RESTAURANT_PROMOTIONS),
      mergeMap((action) =>
        this.restaurantPromotionsService
          .fetchRestaurantPromotions(action.payload)
          .pipe(
            map((restaurantPromotionsList: Array<IRestaurantPromotions>) => {
              return new FetchedRestaurantPromotions(restaurantPromotionsList);
            })
          )
      )
    )
  );

  constructor(
    private action$: Actions<RestaurantPromotionsActionsUnion>,
    private restaurantPromotionsService: RestaurantPromotionsService
  ) {}
}
