import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as restaurantDetailsSelector from './restaurant-details.selectors';
import { IRestaurantDetailsState } from './interfaces/restaurant-details.interface';
import {
  FetchRestaurantDetails,
  FetchedRestaurantDetails,
} from './restaurant-details.actions';

@Injectable({ providedIn: 'root' })
export class RestaurantDetailsFacade {
  restaurantDetailsState: Observable<IRestaurantDetailsState> =
    this.store.select(restaurantDetailsSelector.fetchRestaurantDetails);

  constructor(private store: Store<AppState>) {}

  fetchRestaurantDetails(id: string) {
    this.store.dispatch(new FetchRestaurantDetails(id));
  }

  fetchedRestaurantDetails(restaurantDetails: IRestaurantDetailsState) {
    this.store.dispatch(new FetchedRestaurantDetails(restaurantDetails));
  }
}
