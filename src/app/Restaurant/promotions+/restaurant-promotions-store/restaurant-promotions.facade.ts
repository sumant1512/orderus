import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as restaurantPromotionSelector from './restaurant-promotions.selectors';
import { IRestaurantPromotions } from './interfaces/restaurant-promotions.interface';
import {
  FetchRestaurantActivePromotions,
  FetchRestaurantExpiredPromotions,
  FetchRestaurantScheduledPromotions,
  FetchedRestaurantActivePromotions,
  FetchedRestaurantExpiredPromotions,
  FetchedRestaurantScheduledPromotions,
} from './restaurant-promotions.actions';
import { RestaurantAppState } from 'src/app/Restaurant/resturant-store/restaurant-app.state';

@Injectable({ providedIn: 'root' })
export class RestaurantPromotionsFacade {
  restaurantActivePromotionListState: Observable<Array<IRestaurantPromotions>> =
    this.store.select(
      restaurantPromotionSelector.fetchRestaurantActivePromotionsList
    );

  restaurantScheduledPromotionListState: Observable<
    Array<IRestaurantPromotions>
  > = this.store.select(
    restaurantPromotionSelector.fetchRestaurantScheduledPromotionsList
  );

  restaurantExpiredPromotionListState: Observable<
    Array<IRestaurantPromotions>
  > = this.store.select(
    restaurantPromotionSelector.fetchRestaurantExpiredPromotionsList
  );

  constructor(private store: Store<RestaurantAppState>) {}

  fetchRestaurantActivePromotions() {
    this.store.dispatch(new FetchRestaurantActivePromotions());
  }

  fetchedRestaurantActivePromotions(
    restaurantActivePromotionList: IRestaurantPromotions[]
  ) {
    this.store.dispatch(
      new FetchedRestaurantActivePromotions(restaurantActivePromotionList)
    );
  }

  fetchRestaurantScheduledPromotions() {
    this.store.dispatch(new FetchRestaurantScheduledPromotions());
  }

  fetchedRestaurantScheduledPromotions(
    restaurantScheduledPromotionList: IRestaurantPromotions[]
  ) {
    this.store.dispatch(
      new FetchedRestaurantScheduledPromotions(restaurantScheduledPromotionList)
    );
  }

  fetchRestaurantExpiredPromotions() {
    this.store.dispatch(new FetchRestaurantExpiredPromotions());
  }

  fetchedRestaurantExpiredPromotions(
    restaurantExpiredPromotionList: IRestaurantPromotions[]
  ) {
    this.store.dispatch(
      new FetchedRestaurantExpiredPromotions(restaurantExpiredPromotionList)
    );
  }
}
