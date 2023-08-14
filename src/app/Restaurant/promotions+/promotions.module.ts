import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsComponent } from './promotions.component';
import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { restaurantPromotionsAppReducers } from './restaurant-promotions-store/restaurant-promotions-app.reducers';
import { RestaurantPromotionsAppEffects } from './restaurant-promotions-store/restaurant-promotions-app.effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromotionsRoutingModule } from './promotions-routing.module';

// @NgModule({
//   declarations: [PromotionsComponent],
//   imports: [CommonModule, PromotionsRoutingModule, SharedModule],
// })

const metaReducer = combineReducers(restaurantPromotionsAppReducers);

export function restaurantPromotionsMetaReducer(state: any, action: any) {
  return metaReducer(state, action);
}

@NgModule({
  declarations: [PromotionsComponent],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    SharedModule,
    StoreModule.forFeature(
      'restaurantPromotions',
      restaurantPromotionsMetaReducer,
      {
        metaReducers: [],
      }
    ),
    EffectsModule.forFeature([...RestaurantPromotionsAppEffects]),
  ],
})
export class PromotionsModule {}
