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
import { TransparentFilledButtonDirective } from './directives/transparent-filled-button.directive';
import { ToggleComponent } from './components/toggle/toggle.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { SearchDropdownComponent } from './components/search-dropdown/search-dropdown.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { RestaurantReviewsComponent } from './components/restaurant-reviews/restaurant-reviews.component';
import { SelectionCardComponent } from './components/selection-card/selection-card.component';
import { MenuItemCardTwoComponent } from './components/menu-item-card-two/menu-item-card-two.component';
import { AddNewCardComponent } from './components/add-new-card/add-new-card.component';
import { AddIconComponent } from './components/add-icon/add-icon.component';
import { KebabActionComponent } from './components/kebab-action/kebab-action.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OfferCardComponent,
  ProductThumbnailComponent,
  RestaurantCardComponent,
  DealsCardComponent,
  AddNewCardComponent,
  MenuItemCardOneComponent,
  MenuItemCardTwoComponent,
  ReviewCardComponent,
  SettingCardComponent,
  SelectionCardComponent,
  PaymentCardComponent,
  AddressCardComponent,
  CartMenuCardComponent,
  RestaurantReviewsComponent,
  ToggleComponent,
  RatingComponent,
  DropdownComponent,
  InputComponent,
  InputCheckboxComponent,
  SearchDropdownComponent,
  KebabActionComponent,
  AddIconComponent,
  ItemFilterPipe,
  PrimaryButtonDirective,
  DangerButtonDirective,
  PrimaryFilledButtonDirective,
  TransparentFilledButtonDirective,
];
const MODULES = [
  CommonModule,
  RouterModule,
  NgbModule,
  FormsModule,
  ReactiveFormsModule,
  NgxSkeletonLoaderModule,
  GoogleMapsModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, MODULES],
  providers: [ItemFilterPipe],
})
export class SharedModule {}
