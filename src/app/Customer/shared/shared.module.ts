import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from '../customer.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [HeaderComponent, FooterComponent, CustomerComponent];
const MODULES = [CommonModule, RouterModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
})
export class SharedModule {}
