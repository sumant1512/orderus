import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantSharedModule } from './restaurant-shared/restaurant-shared.module';

@NgModule({
  declarations: [RestaurantComponent],
  imports: [CommonModule, RestaurantSharedModule, RestaurantRoutingModule],
})
export class RestaurantModule {}
