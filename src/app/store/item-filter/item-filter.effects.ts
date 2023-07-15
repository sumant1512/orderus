import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  FetchedItemFilters,
  ItemFilterActions,
  ItemFilterActionsUnion,
} from './item-filter.actions';
import { IItemFilter } from './interfaces/item-filter.interface';
import { ItemFilterService } from './api/item-filter.service';

@Injectable()
export class ItemFilterEffects {
  fetchItemFilter$ = createEffect(() =>
    this.action$.pipe(
      ofType(ItemFilterActions.FETCH_ITEM_FILTERS),
      mergeMap(() =>
        this.itemFilterService.fetchItemFilters().pipe(
          map((itemFilterList: IItemFilter[]) => {
            return new FetchedItemFilters(itemFilterList);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<ItemFilterActionsUnion>,
    private itemFilterService: ItemFilterService
  ) {}
}
