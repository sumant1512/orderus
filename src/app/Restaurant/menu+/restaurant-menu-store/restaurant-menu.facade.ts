import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as restaurantMenuSelector from './restaurant-menu.selectors';
import {
  IRestaurantMenuCategories,
  IRestaurantMenuItem,
} from './interfaces/restaurant-menu.interface';
import {
  FetchRestaurantMenuCategories,
  FetchRestaurantMenuItems,
  FetchedRestaurantMenuCategories,
  FetchedRestaurantMenuItems,
} from './restaurant-menu.actions';
import { RestaurantAppState } from 'src/app/Restaurant/resturant-store/restaurant-app.state';

@Injectable({ providedIn: 'root' })
export class RestaurantMenuFacade {
  restaurantMenuItemListState: Observable<Array<IRestaurantMenuItem>> =
    this.store.select(restaurantMenuSelector.fetchRestaurantMenuItemList);

  restaurantMenuCategoriesListState: Observable<
    Array<IRestaurantMenuCategories>
  > = this.store.select(
    restaurantMenuSelector.fetchRestaurantMenuCategoriesList
  );

  constructor(private store: Store<RestaurantAppState>) {}

  fetchRestaurantMenuItems(id: number) {
    this.store.dispatch(new FetchRestaurantMenuItems(id));
  }

  fetchedRestaurantMenuItems(restaurantMenuItemList: IRestaurantMenuItem[]) {
    this.store.dispatch(new FetchedRestaurantMenuItems(restaurantMenuItemList));
  }

  fetchRestaurantMenuCategories() {
    this.store.dispatch(new FetchRestaurantMenuCategories());
  }

  fetchedRestaurantMenuCategories(
    restaurantMenuCategoriesList: Array<IRestaurantMenuCategories>
  ) {
    this.store.dispatch(
      new FetchedRestaurantMenuCategories(restaurantMenuCategoriesList)
    );
  }
}
