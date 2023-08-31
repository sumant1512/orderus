import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ChefRoutingModule } from './chef-routing.module';
import { ChefSharedModule } from './chef-shared/chef-shared.module';
import { ChefComponent } from './chef.component';
import { chefAppReducers } from './chef-store/chef-app.reducers';
import { ChefAppEffects } from './chef-store/chef-app.effects';

const metaReducer = combineReducers(chefAppReducers);

export function ordersMetaReducer(state: any, action: any) {
  return metaReducer(state, action);
}

@NgModule({
  declarations: [ChefComponent],
  imports: [
    CommonModule,
    ChefSharedModule,
    ChefRoutingModule,
    StoreModule.forFeature('chef', ordersMetaReducer, {
      metaReducers: [],
    }),
    EffectsModule.forFeature([...ChefAppEffects]),
  ],
})
export class ChefModule {}
