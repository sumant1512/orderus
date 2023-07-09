import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { DealsCardComponent } from './components/deals-card/deals-card.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OfferCardComponent,
  ProductThumbnailComponent,
  RestaurantCardComponent,
  DealsCardComponent,
];
const MODULES = [CommonModule, NgbModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, MODULES],
})
export class SharedModule {}
