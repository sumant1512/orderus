import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersRoutingModule } from './my-orders-routing.module';
import { MyOrdersComponent } from './my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [MyOrdersComponent, OrderDetailsComponent],
  imports: [CommonModule, MyOrdersRoutingModule],
})
export class MyOrdersModule {}
