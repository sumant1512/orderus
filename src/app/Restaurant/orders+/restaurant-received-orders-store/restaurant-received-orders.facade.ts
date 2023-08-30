import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as restaurantReceivedOrdersSelector from './restaurant-received-orders.selectors';
import { IRestaurantReceivedOrders } from './restaurant-received-orders.interface';
import {
  FetchRestaurantReceivedActiveOrders,
  FetchRestaurantReceivedDeliveredOrders,
  FetchRestaurantReceivedOpenOrders,
  FetchedRestaurantReceivedActiveOrders,
  FetchedRestaurantReceivedDeliveredOrders,
  FetchedRestaurantReceivedOpenOrders,
} from './restaurant-received-orders.actions';
import { RestaurantAppState } from '../../resturant-store/restaurant-app.state';

@Injectable({ providedIn: 'root' })
export class RestaurantReceivedOrdersFacade {
  restaurantReceivedDeliveredOrdersList: Observable<
    IRestaurantReceivedOrders[]
  > = this.store.select(
    restaurantReceivedOrdersSelector.fetchRestaurantReceivedDeliveredOrdersList
  );

  restaurantReceivedOpenOrdersList: Observable<IRestaurantReceivedOrders[]> =
    this.store.select(
      restaurantReceivedOrdersSelector.fetchRestaurantReceivedOpenOrdersList
    );

  restaurantReceivedActiveOrdersList: Observable<IRestaurantReceivedOrders[]> =
    this.store.select(
      restaurantReceivedOrdersSelector.fetchRestaurantReceivedActiveOrdersList
    );

  constructor(private store: Store<RestaurantAppState>) {}

  fetchRestaurantReceivedDeliveredOrders() {
    this.store.dispatch(new FetchRestaurantReceivedDeliveredOrders());
  }

  fetchedRestaurantReceivedDeliveredOrders(
    restaurantReceivedDeliveredOrdersList: IRestaurantReceivedOrders[]
  ) {
    this.store.dispatch(
      new FetchedRestaurantReceivedDeliveredOrders(
        restaurantReceivedDeliveredOrdersList
      )
    );
  }

  fetchRestaurantReceivedOpenOrders() {
    this.store.dispatch(new FetchRestaurantReceivedOpenOrders());
  }

  fetchedRestaurantReceivedOpenOrders(
    restaurantReceivedOpenOrdersList: IRestaurantReceivedOrders[]
  ) {
    this.store.dispatch(
      new FetchedRestaurantReceivedOpenOrders(restaurantReceivedOpenOrdersList)
    );
  }

  fetchRestaurantReceivedActiveOrders() {
    this.store.dispatch(new FetchRestaurantReceivedActiveOrders());
  }

  fetchedRestaurantReceivedActiveOrders(
    restaurantReceivedActiveOrdersList: IRestaurantReceivedOrders[]
  ) {
    this.store.dispatch(
      new FetchedRestaurantReceivedActiveOrders(
        restaurantReceivedActiveOrdersList
      )
    );
  }
}
