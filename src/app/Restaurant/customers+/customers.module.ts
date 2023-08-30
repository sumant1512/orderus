import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent],
  imports: [CommonModule, CustomersRoutingModule, AngularMaterialModule],
})
export class CustomersModule {}
