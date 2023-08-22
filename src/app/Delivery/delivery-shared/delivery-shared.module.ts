import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryFooterComponent } from './delivery-footer/delivery-footer.component';
import { DeliveryHeaderComponent } from './delivery-header/delivery-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';

const COMPONENTS = [DeliveryHeaderComponent, DeliveryFooterComponent];
const MODULES = [
  CommonModule,
  RouterModule,
  NgbModule,
  FormsModule,
  ReactiveFormsModule,
  NgxSkeletonLoaderModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, MODULES],
  providers: [],
})
export class DeliverySharedModule {}
