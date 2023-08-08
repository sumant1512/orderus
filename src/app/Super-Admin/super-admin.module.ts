import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { SharedModule } from './shared/shared.module';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    SuperAdminComponent,
    AdminRegistrationComponent,
    CustomersComponent,
  ],
  imports: [CommonModule, SharedModule, SuperAdminRoutingModule],
})
export class SuperAdminModule {}
