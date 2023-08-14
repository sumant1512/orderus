import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedRestaurantReceivedOrders,
  RestaurantReceivedOrdersActions,
  RestaurantReceivedOrdersActionsUnion,
} from './restaurant-received-orders.actions';
import { IRestaurantReceivedOrders } from './interfaces/restaurant-received-orders.interface';
import { RestaurantReceivedOrdersService } from './api/restaurant-received-orders.service';

@Injectable()
export class RestaurantReceivedOrdersEffects {
  fetchRestaurantReceivedOrders$ = createEffect(() =>
    this.action$.pipe(
      ofType(RestaurantReceivedOrdersActions.FETCH_RESTAURANT_RECEIVED_ORDERS),
      mergeMap(() =>
        this.restaurantReceivedOrdersService
          .fetchRestaurantReceivedOrders()
          .pipe(
            map((restaurantReceivedOrdersList: IRestaurantReceivedOrders[]) => {
              return new FetchedRestaurantReceivedOrders(
                restaurantReceivedOrdersList
              );
            })
          )
      )
    )
  );

  constructor(
    private action$: Actions<RestaurantReceivedOrdersActionsUnion>,
    private restaurantReceivedOrdersService: RestaurantReceivedOrdersService
  ) {}
}
