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
import { RatingComponent } from './components/rating/rating.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SettingCardComponent } from './components/setting-card/setting-card.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { PrimaryButtonDirective } from './directives/primary-button.directive';
import { DangerButtonDirective } from './directives/danger-button.directive';
import { PrimaryFilledButtonDirective } from './directives/primary-filled-button.directive';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { CartMenuCardComponent } from './components/cart-menu-card/cart-menu-card.component';

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
  PaymentCardComponent,
  AddressCardComponent,
  CartMenuCardComponent,
  RatingComponent,
  DropdownComponent,
  InputComponent,
  InputCheckboxComponent,
  ItemFilterPipe,
  PrimaryButtonDirective,
  DangerButtonDirective,
  PrimaryFilledButtonDirective,
];
const MODULES = [CommonModule, NgbModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, MODULES],
  providers: [ItemFilterPipe],
})
export class SharedModule {}
