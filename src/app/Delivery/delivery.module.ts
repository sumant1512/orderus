import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliverySharedModule } from './delivery-shared/delivery-shared.module';
import { DeliveryComponent } from './delivery.component';

@NgModule({
  declarations: [DeliveryComponent],
  imports: [CommonModule, DeliverySharedModule, DeliveryRoutingModule],
})
export class DeliveryModule {}
