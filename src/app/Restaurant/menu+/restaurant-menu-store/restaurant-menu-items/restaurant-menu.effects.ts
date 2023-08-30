import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedRestaurantMenuItems,
  RestaurantMenuActions,
  RestaurantMenuActionsUnion,
} from './restaurant-menu.actions';
import { IRestaurantMenuItem } from './interfaces/restaurant-menu.interface';
import { RestaurantMenuService } from './api/restaurant-menu.service';

@Injectable()
export class RestaurantMenuEffects {
  fetchRestaurantMenuItems$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantMenuActions.FETCH_RESTAURANT_MENU_ITEMS),
      mergeMap(() =>
        this.restaurantMenuService.fetchRestaurantMenuItems().pipe(
          map((restaurantMenuItemList: IRestaurantMenuItem[]) => {
            return new FetchedRestaurantMenuItems(restaurantMenuItemList);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<RestaurantMenuActionsUnion>,
    private restaurantMenuService: RestaurantMenuService
  ) {}
}
