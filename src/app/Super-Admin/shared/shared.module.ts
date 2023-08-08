import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { SuperAdminHeaderComponent } from './super-admin-header/super-admin-header.component';

const COMPONENTS = [SuperAdminHeaderComponent];
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
export class SuperAdminSharedModule {}
