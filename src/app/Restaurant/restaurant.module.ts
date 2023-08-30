import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantSharedModule } from './restaurant-shared/restaurant-shared.module';
import { StoreModule, combineReducers } from '@ngrx/store';
import { restaurantAppReducers } from './resturant-store/restaurant-app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { RestaurantAppEffects } from './resturant-store/restaurant-app.effects';

const metaReducer = combineReducers(restaurantAppReducers);

export function restaurantMetaReducer(state: any, action: any) {
  return metaReducer(state, action);
}

@NgModule({
  declarations: [RestaurantComponent],
  imports: [
    CommonModule,
    RestaurantSharedModule,
    RestaurantRoutingModule,
    StoreModule.forFeature('restaurant', restaurantMetaReducer, {
      metaReducers: [],
    }),
    EffectsModule.forFeature([...RestaurantAppEffects]),
  ],
})
export class RestaurantModule {}
