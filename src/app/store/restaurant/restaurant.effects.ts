import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedRestaurants,
  RestaurantActions,
  RestaurantActionsUnion,
} from './restaurant.actions';
import { IRestaurant } from './interfaces/restaurant.interface';
import { RestaurantService } from './api/restaurant.service';

@Injectable()
export class RestaurantEffects {
  fetchRestaurant$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantActions.FETCH_RESTAURANTS),
      mergeMap(() =>
        this.restaurantService.fetchRestaurants().pipe(
          map((restaurantList: IRestaurant[]) => {
            return new FetchedRestaurants(restaurantList);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<RestaurantActionsUnion>,
    private restaurantService: RestaurantService
  ) {}
}
