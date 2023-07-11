import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedRestaurantDetails,
  RestaurantDetailsActions,
  RestaurantDetailsActionsUnion,
} from './restaurant-details.actions';
import { IRestaurantDetailsState } from './interfaces/restaurant.interface';
import { RestaurantDetailsService } from './api/restaurant-details.service';

@Injectable()
export class RestaurantDetailsEffects {
  fetchRestaurant$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantDetailsActions.FETCH_RESTAURANT_DETAILS),
      mergeMap((action) =>
        this.restaurantDetailsService
          .fetchRestaurantDetails(action.payload)
          .pipe(
            map((restaurantDetailsList: IRestaurantDetailsState) => {
              return new FetchedRestaurantDetails(restaurantDetailsList);
            })
          )
      )
    )
  );

  constructor(
    private action$: Actions<RestaurantDetailsActionsUnion>,
    private restaurantDetailsService: RestaurantDetailsService
  ) {}
}
