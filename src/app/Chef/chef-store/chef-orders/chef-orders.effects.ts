import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  ChefOrdersActions,
  ChefOrdersActionsUnion,
  FetchedChefOrders,
} from './chef-orders.actions';
import { IChefOrders } from './interfaces/chef-orders.interface';
import { ChefOrdersService } from './api/chef-orders.service';

@Injectable()
export class ChefOrdersEffects {
  fetchOpenOrders$ = createEffect(() =>
    this.action$.pipe(
      ofType(ChefOrdersActions.FETCH_CHEF_ORDERS),
      mergeMap((action) =>
        this.chefOrdersService.fetchChefOrders(action.payload).pipe(
          map((openOrdersList: IChefOrders[]) => {
            return new FetchedChefOrders(openOrdersList);
          })
        )
      )
    )
  );

  constructor(
    private action$: Actions<ChefOrdersActionsUnion>,
    private chefOrdersService: ChefOrdersService
  ) {}
}
