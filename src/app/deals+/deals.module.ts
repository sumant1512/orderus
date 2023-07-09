import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DealsComponent],
  imports: [CommonModule, DealsRoutingModule, SharedModule],
})
export class DealsModule {}
