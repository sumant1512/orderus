import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedRestaurantReceivedActiveOrders,
  FetchedRestaurantReceivedDeliveredOrders,
  FetchedRestaurantReceivedOpenOrders,
  RestaurantReceivedOrdersActions,
  RestaurantReceivedOrdersActionsUnion,
} from './restaurant-received-orders.actions';
import { IRestaurantReceivedOrders } from './restaurant-received-orders.interface';
import { RestaurantReceivedOrdersService } from './api/restaurant-received-orders.service';

@Injectable()
export class RestaurantReceivedOrdersEffects {
  fetchRestaurantReceivedDelivededOrders$ = createEffect(() =>
    this.action$.pipe(
      ofType(
        RestaurantReceivedOrdersActions.FETCH_RESTAURANT_RECEIVED_DELIVERED_ORDERS
      ),
      mergeMap(() =>
        this.restaurantReceivedOrdersService
          .fetchRestaurantReceivedDeliveredOrders()
          .pipe(
            map(
              (
                restaurantReceivedDeliveredOrdersList: IRestaurantReceivedOrders[]
              ) => {
                return new FetchedRestaurantReceivedDeliveredOrders(
                  restaurantReceivedDeliveredOrdersList
                );
              }
            )
          )
      )
    )
  );

  fetchRestaurantReceivedOpenOrders$ = createEffect(() =>
    this.action$.pipe(
      ofType(
        RestaurantReceivedOrdersActions.FETCH_RESTAURANT_RECEIVED_OPEN_ORDERS
      ),
      mergeMap(() =>
        this.restaurantReceivedOrdersService
          .fetchRestaurantReceivedOpenOrders()
          .pipe(
            map(
              (
                restaurantReceivedOpenOrdersList: IRestaurantReceivedOrders[]
              ) => {
                return new FetchedRestaurantReceivedOpenOrders(
                  restaurantReceivedOpenOrdersList
                );
              }
            )
          )
      )
    )
  );

  fetchRestaurantReceivedActiveOrders$ = createEffect(() =>
    this.action$.pipe(
      ofType(
        RestaurantReceivedOrdersActions.FETCH_RESTAURANT_RECEIVED_ACTIVE_ORDERS
      ),
      mergeMap(() =>
        this.restaurantReceivedOrdersService
          .fetchRestaurantReceivedActiveOrders()
          .pipe(
            map(
              (
                restaurantReceivedActiveOrdersList: IRestaurantReceivedOrders[]
              ) => {
                return new FetchedRestaurantReceivedActiveOrders(
                  restaurantReceivedActiveOrdersList
                );
              }
            )
          )
      )
    )
  );

  constructor(
    private action$: Actions<RestaurantReceivedOrdersActionsUnion>,
    private restaurantReceivedOrdersService: RestaurantReceivedOrdersService
  ) {}
}
