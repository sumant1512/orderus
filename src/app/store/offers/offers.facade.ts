import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import * as itemFilterSelector from './offers.selectors';
import { IOffers } from './interfaces/offers.interface';
import { FetchOffers, FetchedOffers } from './offers.actions';

@Injectable({ providedIn: 'root' })
export class OffersFacade {
  offersListState: Observable<Array<IOffers>> = this.store.select(
    itemFilterSelector.fetchOffersList
  );

  constructor(private store: Store<AppState>) {}

  fetchOffersList() {
    this.store.dispatch(new FetchOffers());
  }

  fetchedOffers(itemFilterList: Array<IOffers>) {
    this.store.dispatch(new FetchedOffers(itemFilterList));
  }
}
