import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersRoutingModule } from './my-orders-routing.module';
import { MyOrdersComponent } from './my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SharedModule } from '../shared/shared.module';
import { OrderStatusComponent } from './order-status/order-status.component';

@NgModule({
  declarations: [MyOrdersComponent, OrderDetailsComponent, OrderStatusComponent],
  imports: [CommonModule, MyOrdersRoutingModule, SharedModule],
})
export class MyOrdersModule {}
