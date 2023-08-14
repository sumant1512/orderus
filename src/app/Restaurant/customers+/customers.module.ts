import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, combineReducers } from '@ngrx/store';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersAppEffects } from './customers-store/customers-app.effects';
import { customersAppReducers } from './customers-store/customers-app.reducers';
import { EffectsModule } from '@ngrx/effects';

const metaReducer = combineReducers(customersAppReducers);

export function customersMetaReducer(state: any, action: any) {
  return metaReducer(state, action);
}

@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customer', customersMetaReducer, {
      metaReducers: [],
    }),
    EffectsModule.forFeature([...CustomersAppEffects]),
  ],
})
export class CustomersModule {}
