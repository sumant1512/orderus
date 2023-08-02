import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    ProfileComponent,
    AccountInfoComponent,
    AddressInfoComponent,
    PaymentInfoComponent,
    SecurityComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
