import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuModalComponent } from './modals/menu-modal/menu-modal.component';
import { CategoryModalComponent } from './modals/category-modal/category-modal.component';

@NgModule({
  declarations: [MenuComponent, MenuModalComponent, CategoryModalComponent],
  imports: [CommonModule, MenuRoutingModule, SharedModule],
})
export class MenuModule {}
