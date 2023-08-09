import { NgModule } from '@angular/core';
import { CustomerSharedModule } from './customer-shared/customer-shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [RouterModule, CustomerSharedModule, CustomerRoutingModule],
})
export class CustomerModule {}
