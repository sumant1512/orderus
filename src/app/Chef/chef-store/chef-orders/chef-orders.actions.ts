import { Action } from '@ngrx/store';
import { IChefOrders } from './interfaces/chef-orders.interface';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';

export enum ChefOrdersActions {
  FETCH_CHEF_ORDERS = '[ChefOrders] Fetch ChefOrders',
  FETCHED_CHEF_ORDERS = '[ChefOrders] Fetched ChefOrders',
}

export class FetchChefOrders implements Action {
  readonly type = ChefOrdersActions.FETCH_CHEF_ORDERS;
  constructor(public payload: ETabCode) {}
}

export class FetchedChefOrders implements Action {
  readonly type = ChefOrdersActions.FETCHED_CHEF_ORDERS;
  constructor(public payload: IChefOrders[]) {}
}

export type ChefOrdersActionsUnion = FetchChefOrders | FetchedChefOrders;
