import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedOffers,
  OffersActions,
  OffersActionsUnion,
} from './offers.actions';
import { IOffers } from './interfaces/offers.interface';
import { OffersService } from './api/offers.service';

@Injectable()
export class OffersEffects {
  fetchOffers$ = createEffect(() =>
    this.action$.pipe(
      ofType(OffersActions.FETCH_OFFERS),
      mergeMap(() =>
        this.itemFilterService.fetchOffers().pipe(
          map((itemFilterList: Array<IOffers>) => {
            return new FetchedOffers(itemFilterList);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<OffersActionsUnion>,
    private itemFilterService: OffersService
  ) {}
}
