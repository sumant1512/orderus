import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliverySharedModule } from './delivery-shared/delivery-shared.module';
import { DeliveryComponent } from './delivery.component';
import { deliveryAppReducers } from './delivery-store/delivery-app.reducers';
import { DeliveryAppEffects } from './delivery-store/delivery-app.effects';

const metaReducer = combineReducers(deliveryAppReducers);

export function ordersMetaReducer(state: any, action: any) {
  return metaReducer(state, action);
}

@NgModule({
  declarations: [DeliveryComponent],
  imports: [
    CommonModule,
    DeliverySharedModule,
    DeliveryRoutingModule,
    StoreModule.forFeature('delivery', ordersMetaReducer, {
      metaReducers: [],
    }),
    EffectsModule.forFeature([...DeliveryAppEffects]),
  ],
})
export class DeliveryModule {}
