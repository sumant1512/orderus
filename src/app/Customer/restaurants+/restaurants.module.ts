import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { SharedModule } from '../../shared/shared.module';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

@NgModule({
  declarations: [RestaurantsComponent, RestaurantDetailsComponent],
  imports: [CommonModule, RestaurantsRoutingModule, SharedModule],
})
export class RestaurantsModule {}
