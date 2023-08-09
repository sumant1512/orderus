import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { SuperAdminSharedModule } from './shared/shared.module';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminsComponent } from './admins/admins.component';
import { SharedModule } from '../shared/shared.module';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

@NgModule({
  declarations: [
    SuperAdminComponent,
    AdminRegistrationComponent,
    AdminsComponent,
    AdminDetailsComponent,
  ],
  imports: [
    CommonModule,
    SuperAdminSharedModule,
    SharedModule,
    SuperAdminRoutingModule,
  ],
})
export class SuperAdminModule {}
