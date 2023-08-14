import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as restaurantReceivedOrdersSelector from './restaurant-received-orders.selectors';
import { IRestaurantReceivedOrders } from './interfaces/restaurant-received-orders.interface';
import {
  FetchRestaurantReceivedOrders,
  FetchedRestaurantReceivedOrders,
} from './restaurant-received-orders.actions';
import { OrdersAppState } from '../orders-app.state';

@Injectable({ providedIn: 'root' })
export class RestaurantReceivedOrdersFacade {
  restaurantReceivedOrdersListState: Observable<IRestaurantReceivedOrders[]> =
    this.store.select(
      restaurantReceivedOrdersSelector.fetchRestaurantReceivedOrdersList
    );

  constructor(private store: Store<OrdersAppState>) {}

  fetchRestaurantReceivedOrders() {
    this.store.dispatch(new FetchRestaurantReceivedOrders());
  }

  fetchedRestaurantReceivedOrders(
    restaurantReceivedOrdersList: IRestaurantReceivedOrders[]
  ) {
    this.store.dispatch(
      new FetchedRestaurantReceivedOrders(restaurantReceivedOrdersList)
    );
  }
}
