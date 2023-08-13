import { IItemFilterState } from './item-filter/interfaces/item-filter.interface';
import { IOffersState } from './offers/interfaces/offers.interface';
import { IRegistrationState } from './registration/interfaces/registration.interface';
import { ICustomerState } from './customer/interfaces/customer.interface';
import { IRestaurantDetailsState } from './restaurant-details/interfaces/restaurant-details.interface';
import { IRestaurantState } from './restaurant/interfaces/restaurant.interface';
import { IUserInfoState } from './user-info/interfaces/user-info.interface';
import { IRestaurantReceivedOrdersState } from './restaurant-received-orders/interfaces/restaurant-received-orders.interface';
import { IPromotionState } from './promotion/interfaces/promotion.interface';

export type AppState = Partial<{
  restaurant: IRestaurantState;
  restaurantDetails: IRestaurantDetailsState;
  itemFilters: IItemFilterState;
  offers: IOffersState;
  userInfo: IUserInfoState;
  registration: IRegistrationState;
  customer: ICustomerState;
  restaurantReceivedOrders: IRestaurantReceivedOrdersState;
  promotion: IPromotionState;
}>;
