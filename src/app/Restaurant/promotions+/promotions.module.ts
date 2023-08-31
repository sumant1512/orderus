import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsComponent } from './promotions.component';
// import { StoreModule, combineReducers } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { restaurantPromotionsAppReducers } from './restaurant-promotions-store-app.reducers';
// import { RestaurantPromotionsAppEffects } from './restaurant-promotions-store-app.effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsModalComponent } from './modals/promotions-modal/promotions-modal.component';

// const metaReducer = combineReducers(restaurantPromotionsAppReducers);

// export function restaurantPromotionsMetaReducer(state: any, action: any) {
//   return metaReducer(state, action);
// }

@NgModule({
  declarations: [PromotionsComponent, PromotionsModalComponent],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    SharedModule,
    // StoreModule.forFeature(
    //   'restaurantPromotions',
    //   restaurantPromotionsMetaReducer,
    //   {
    //     metaReducers: [],
    //   }
    // ),
    // EffectsModule.forFeature([...RestaurantPromotionsAppEffects]),
  ],
})
export class PromotionsModule {}
