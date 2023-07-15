import { Action } from '@ngrx/store';
import { IItemFilter } from './interfaces/item-filter.interface';

export enum ItemFilterActions {
  FETCH_ITEM_FILTERS = '[ItemFilter] Fetch ItemFilters',
  FETCHED_ITEM_FILTERS = '[ItemFilter] Fetched ItemFilters',
}

export class FetchItemFilters implements Action {
  readonly type = ItemFilterActions.FETCH_ITEM_FILTERS;
}

export class FetchedItemFilters implements Action {
  readonly type = ItemFilterActions.FETCHED_ITEM_FILTERS;
  constructor(public payload: IItemFilter[]) {}
}

export type ItemFilterActionsUnion = FetchItemFilters | FetchedItemFilters;
