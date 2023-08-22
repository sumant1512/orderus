import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedDeliveredOrders,
  DeliveryOrdersActions,
  DeliveryOrdersActionsUnion,
  FetchedOpenOrders,
  FetchedActiveOrders,
} from './delivery-orders.actions';
import { IDeliveryOrders } from './interfaces/delivery-orders.interface';
import { DeliveryOrdersService } from './api/delivery-orders.service';

@Injectable()
export class DeliveryOrdersEffects {
  fetchDeliveredOrders$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeliveryOrdersActions.FETCH_DELIVERED_ORDERS),
      mergeMap(() =>
        this.deliveryOrdersService.fetchDeliveredOrders().pipe(
          map((deliveredOrdersList: IDeliveryOrders[]) => {
            return new FetchedDeliveredOrders(deliveredOrdersList);
          })
        )
      )
    )
  );

  fetchOpenOrders$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeliveryOrdersActions.FETCH_OPEN_ORDERS),
      mergeMap(() =>
        this.deliveryOrdersService.fetchOpenOrders().pipe(
          map((openOrdersList: IDeliveryOrders[]) => {
            return new FetchedOpenOrders(openOrdersList);
          })
        )
      )
    )
  );

  fetchActiveOrders$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeliveryOrdersActions.FETCH_ACTIVE_ORDERS),
      mergeMap(() =>
        this.deliveryOrdersService.fetchActiveOrders().pipe(
          map((activeOrdersList: IDeliveryOrders[]) => {
            return new FetchedActiveOrders(activeOrdersList);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<DeliveryOrdersActionsUnion>,
    private deliveryOrdersService: DeliveryOrdersService
  ) {}
}
