import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedDeliveryOrders,
  DeliveryOrdersActions,
  DeliveryOrdersActionsUnion,
} from './delivery-orders.actions';
import { IDeliveryOrders } from './interfaces/delivery-orders.interface';
import { DeliveryOrdersService } from './api/delivery-orders.service';

@Injectable()
export class DeliveryOrdersEffects {
  fetchDeliveryOrders$ = createEffect(() =>
    this.action$.pipe(
      ofType(DeliveryOrdersActions.FETCH_DELIVERY_ORDERS),
      mergeMap(() =>
        this.deliveryOrdersService.fetchDeliveryOrders().pipe(
          map((deliveredOrdersList: IDeliveryOrders[]) => {
            return new FetchedDeliveryOrders(deliveredOrdersList);
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
