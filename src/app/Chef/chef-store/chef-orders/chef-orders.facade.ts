import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as chefOrdersSelector from './chef-orders.selectors';
import { IChefOrders } from './interfaces/chef-orders.interface';
import { FetchChefOrders, FetchedChefOrders } from './chef-orders.actions';
import { ChefAppState } from '../chef-app.state';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';

@Injectable({ providedIn: 'root' })
export class ChefOrdersFacade {
  chefOrdersListState: Observable<IChefOrders[]> = this.store.select(
    chefOrdersSelector.fetchChefOrdersList
  );

  constructor(private store: Store<ChefAppState>) {}

  fetchChefOrders(selectionCode: ETabCode) {
    this.store.dispatch(new FetchChefOrders(selectionCode));
  }

  fetchedChefOrders(deliveredOrdersList: IChefOrders[]) {
    this.store.dispatch(new FetchedChefOrders(deliveredOrdersList));
  }
}
