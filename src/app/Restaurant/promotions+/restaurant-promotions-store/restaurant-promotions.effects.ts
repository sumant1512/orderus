import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedRestaurantActivePromotions,
  FetchedRestaurantExpiredPromotions,
  FetchedRestaurantScheduledPromotions,
  RestaurantPromotionsActions,
  RestaurantPromotionsActionsUnion,
} from './restaurant-promotions.actions';
import { IRestaurantPromotions } from './interfaces/restaurant-promotions.interface';
import { RestaurantPromotionsService } from './api/restaurant-promotions.service';

@Injectable()
export class RestaurantPromotionsEffects {
  fetchRestaurantActivePromotions$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantPromotionsActions.FETCH_RESTAURANT_ACTIVE_PROMOTIONS),
      mergeMap(() =>
        this.restaurantPromotionsService.fetchRestaurantActivePromotions().pipe(
          map(
            (restaurantActivePromotionsList: Array<IRestaurantPromotions>) => {
              return new FetchedRestaurantActivePromotions(
                restaurantActivePromotionsList
              );
            }
          )
        )
      )
    )
  );

  fetchRestaurantScheduledPromotions$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantPromotionsActions.FETCH_RESTAURANT_SCHEDULED_PROMOTIONS),
      mergeMap(() =>
        this.restaurantPromotionsService
          .fetchRestaurantScheduledPromotions()
          .pipe(
            map(
              (
                restaurantScheduledPromotionsList: Array<IRestaurantPromotions>
              ) => {
                return new FetchedRestaurantScheduledPromotions(
                  restaurantScheduledPromotionsList
                );
              }
            )
          )
      )
    )
  );

  fetchRestaurantPromotions$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantPromotionsActions.FETCH_RESTAURANT_EXPIRED_PROMOTIONS),
      mergeMap(() =>
        this.restaurantPromotionsService.fetchRestaurantPromotions().pipe(
          map((restaurantPromotionsList: Array<IRestaurantPromotions>) => {
            return new FetchedRestaurantExpiredPromotions(
              restaurantPromotionsList
            );
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
