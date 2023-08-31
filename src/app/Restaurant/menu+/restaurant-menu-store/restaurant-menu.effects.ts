import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedRestaurantMenuCategories,
  FetchedRestaurantMenuItems,
  RestaurantMenuActions,
  RestaurantMenuActionsUnion,
} from './restaurant-menu.actions';
import {
  IRestaurantMenuCategories,
  IRestaurantMenuItem,
} from './interfaces/restaurant-menu.interface';
import { RestaurantMenuService } from './api/restaurant-menu.service';

@Injectable()
export class RestaurantMenuEffects {
  fetchRestaurantMenuItems$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantMenuActions.FETCH_RESTAURANT_MENU_ITEMS),
      mergeMap((action) =>
        this.restaurantMenuService
          .fetchRestaurantMenuItems(action.payload)
          .pipe(
            map((restaurantMenuItemList: IRestaurantMenuItem[]) => {
              return new FetchedRestaurantMenuItems(restaurantMenuItemList);
            })
          )
      )
    )
  );

  fetchRestaurantMenuCategories$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantMenuActions.FETCH_RESTAURANT_MENU_CATEGORIES),
      mergeMap(() =>
        this.restaurantMenuService.fetchRestaurantMenuCategories().pipe(
          map(
            (
              restaurantMenuCategoriesList: Array<IRestaurantMenuCategories>
            ) => {
              return new FetchedRestaurantMenuCategories(
                restaurantMenuCategoriesList
              );
            }
          )
        )
      )
    )
  );

  constructor(
    private action$: Actions<RestaurantMenuActionsUnion>,
    private restaurantMenuService: RestaurantMenuService
  ) {}
}
