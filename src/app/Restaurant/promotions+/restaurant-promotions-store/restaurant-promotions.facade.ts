import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as restaurantPromotionSelector from './restaurant-promotions.selectors';
import { IRestaurantPromotions } from './interfaces/restaurant-promotions.interface';
import {
  FetchRestaurantPromotions,
  FetchedRestaurantPromotions,
} from './restaurant-promotions.actions';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';
import { RestaurantAppState } from 'src/app/Restaurant/resturant-store/restaurant-app.state';

@Injectable({ providedIn: 'root' })
export class RestaurantPromotionsFacade {
  restaurantPromotionListState: Observable<Array<IRestaurantPromotions>> =
    this.store.select(
      restaurantPromotionSelector.fetchRestaurantPromotionsList
    );

  restaurantPromotionByStatus = (
    status: ETabCode
  ): Observable<Array<IRestaurantPromotions>> => {
    return this.store.select(
      restaurantPromotionSelector.selectRestaurantPromotionsByStatus(status)
    );
  };

  constructor(private store: Store<RestaurantAppState>) {}

  fetchRestaurantPromotions(statusCode: ETabCode) {
    this.store.dispatch(new FetchRestaurantPromotions(statusCode));
  }

  fetchedRestaurantPromotions(
    restaurantPromotionList: IRestaurantPromotions[]
  ) {
    this.store.dispatch(
      new FetchedRestaurantPromotions(restaurantPromotionList)
    );
  }
}
