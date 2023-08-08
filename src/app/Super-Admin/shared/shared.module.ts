import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';

const COMPONENTS = [HeaderComponent];
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
export class SharedModule {}
