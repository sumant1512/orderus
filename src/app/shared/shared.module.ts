import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { ProductThumbnailComponent } from './components/product-thumbnail/product-thumbnail.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { DealsCardComponent } from './components/deals-card/deals-card.component';
import { MenuItemCardOneComponent } from './components/menu-item-card-one/menu-item-card-one.component';
import { ItemFilterPipe } from './pipes/item-filter.pipe';
import { ButtonComponent } from './components/button/button.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SettingCardComponent } from './components/setting-card/setting-card.component';
import { HeadingComponent } from './components/heading/heading.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OfferCardComponent,
  ProductThumbnailComponent,
  RestaurantCardComponent,
  DealsCardComponent,
  MenuItemCardOneComponent,
  ReviewCardComponent,
  SettingCardComponent,
  HeadingComponent,
  ButtonComponent,
  RatingComponent,
  DropdownComponent,
  ItemFilterPipe,
];
const MODULES = [CommonModule, NgbModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, MODULES],
  providers: [ItemFilterPipe],
})
export class SharedModule {}
