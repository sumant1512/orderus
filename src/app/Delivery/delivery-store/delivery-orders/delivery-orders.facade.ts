import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as deliveryOrdersSelector from './delivery-orders.selectors';
import { IDeliveryOrders } from './interfaces/delivery-orders.interface';
import {
  FetchActiveOrders,
  FetchDeliveredOrders,
  FetchOpenOrders,
  FetchedActiveOrders,
  FetchedDeliveredOrders,
  FetchedOpenOrders,
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

  fetchDeliveredOrders() {
    this.store.dispatch(new FetchDeliveredOrders());
  }

  fetchedDeliveredOrders(deliveredOrdersList: IDeliveryOrders[]) {
    this.store.dispatch(new FetchedDeliveredOrders(deliveredOrdersList));
  }

  fetchOpenOrders() {
    this.store.dispatch(new FetchOpenOrders());
  }

  fetchedOpenOrders(openOrdersList: IDeliveryOrders[]) {
    this.store.dispatch(new FetchedOpenOrders(openOrdersList));
  }

  fetchActiveOrders() {
    this.store.dispatch(new FetchActiveOrders());
  }

  fetchedActiveOrders(activeOrdersList: IDeliveryOrders[]) {
    this.store.dispatch(new FetchedActiveOrders(activeOrdersList));
  }
}
