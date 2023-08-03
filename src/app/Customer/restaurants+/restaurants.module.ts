import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { SharedModule } from '../../shared/shared.module';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantReviewsComponent } from './restaurant-reviews/restaurant-reviews.component';

@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantDetailsComponent,
    RestaurantReviewsComponent,
  ],
  imports: [CommonModule, RestaurantsRoutingModule, SharedModule],
})
export class RestaurantsModule {}
