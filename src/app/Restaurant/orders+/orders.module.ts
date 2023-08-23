import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { StoreModule, combineReducers } from '@ngrx/store';
import { ordersAppReducers } from './orders-store/orders-app.reducers';
import { OrdersAppEffects } from './orders-store/orders-app.effects';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'src/app/shared/shared.module';

const metaReducer = combineReducers(ordersAppReducers);

export function ordersMetaReducer(state: any, action: any) {
  return metaReducer(state, action);
}

@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    StoreModule.forFeature('restaurant', ordersMetaReducer, {
      metaReducers: [],
    }),
    EffectsModule.forFeature([...OrdersAppEffects]),
  ],
})
export class OrdersModule {}
