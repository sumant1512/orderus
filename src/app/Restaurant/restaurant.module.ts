import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [RestaurantComponent],
  imports: [CommonModule, SharedModule, RestaurantRoutingModule],
})
export class RestaurantModule {}
