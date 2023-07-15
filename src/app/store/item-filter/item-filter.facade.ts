import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as itemFilterSelector from './item-filter.selectors';
import { IItemFilter } from './interfaces/item-filter.interface';
import { FetchItemFilters, FetchedItemFilters } from './item-filter.actions';

@Injectable({ providedIn: 'root' })
export class ItemFilterFacade {
  itemFilterListState: Observable<Array<IItemFilter>> = this.store.select(
    itemFilterSelector.fetchItemFilterList
  );

  constructor(private store: Store<AppState>) {}

  fetchItemFilter() {
    this.store.dispatch(new FetchItemFilters());
  }

  fetchedItemFilters(itemFilterList: Array<IItemFilter>) {
    this.store.dispatch(new FetchedItemFilters(itemFilterList));
  }
}
