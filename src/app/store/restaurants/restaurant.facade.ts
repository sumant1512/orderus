import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as restaurantSelector from './restaurant.selectors';
import { IRestaurant } from './interfaces/restaurant.interface';
import { FetchRestaurants, FetchedRestaurants } from './restaurant.actions';

@Injectable({ providedIn: 'root' })
export class RestaurantFacade {
  restaurantListState: Observable<IRestaurant[]> = this.store.select(
    restaurantSelector.fetchRestaurantList
  );

  constructor(private store: Store<AppState>) {}

  fetchRestaurant() {
    this.store.dispatch(new FetchRestaurants());
  }

  fetchedRestaurants(restaurantList: IRestaurant[]) {
    this.store.dispatch(new FetchedRestaurants(restaurantList));
  }
}
