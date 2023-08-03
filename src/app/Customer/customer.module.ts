import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [RouterModule, SharedModule, CustomerRoutingModule],
})
export class CustomerModule {}
