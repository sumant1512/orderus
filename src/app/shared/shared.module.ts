import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferCardComponent } from './components/offer-card/offer-card.component';

const COMPONENTS = [HeaderComponent, FooterComponent, OfferCardComponent];
const MODULES = [CommonModule, NgbModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, MODULES],
})
export class SharedModule {}
