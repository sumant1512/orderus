import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from '../customer.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  CustomerHeaderComponent,
  FooterComponent,
  CustomerComponent,
];
const MODULES = [CommonModule, RouterModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
})
export class CustomerSharedModule {}
