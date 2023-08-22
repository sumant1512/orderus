import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as deliveryOrdersSelector from './delivery-orders.selectors';
import { IDeliveryOrders } from './interfaces/delivery-orders.interface';
import {
  FetchDeliveryOrders,
  FetchedDeliveryOrders,
} from './delivery-orders.actions';
import { DeliveryAppState } from '../delivery-app.state';

@Injectable({ providedIn: 'root' })
export class DeliveryOrdersFacade {
  deliveredOrdersListState: Observable<IDeliveryOrders[]> = this.store.select(
    deliveryOrdersSelector.fetchdeliveredOrdersList
  );

  activeOrdersListState: Observable<IDeliveryOrders[]> = this.store.select(
    deliveryOrdersSelector.fetchActiveOrdersList
  );

  openOrdersListState: Observable<IDeliveryOrders[]> = this.store.select(
    deliveryOrdersSelector.fetchOpenOrdersList
  );

  constructor(private store: Store<DeliveryAppState>) {}

  fetchDeliveryOrders() {
    this.store.dispatch(new FetchDeliveryOrders());
  }

  fetchedDeliveryOrders(deliveredOrdersList: IDeliveryOrders[]) {
    this.store.dispatch(new FetchedDeliveryOrders(deliveredOrdersList));
  }
}
