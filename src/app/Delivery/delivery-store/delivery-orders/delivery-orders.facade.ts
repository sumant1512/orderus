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
  deliveryOrdersListState: Observable<IDeliveryOrders[]> = this.store.select(
    deliveryOrdersSelector.fetchDeliveryOrdersList
  );

  constructor(private store: Store<DeliveryAppState>) {}

  fetchDeliveryOrders() {
    this.store.dispatch(new FetchDeliveryOrders());
  }

  fetchedDeliveryOrders(deliveryOrdersList: IDeliveryOrders[]) {
    this.store.dispatch(new FetchedDeliveryOrders(deliveryOrdersList));
  }
}
