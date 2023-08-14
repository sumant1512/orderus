import { IItemFilterState } from './item-filter/interfaces/item-filter.interface';
import { IOffersState } from './offers/interfaces/offers.interface';
import { IRegistrationState } from './registration/interfaces/registration.interface';
import { IRestaurantDetailsState } from './restaurant-details/interfaces/restaurant-details.interface';
import { IRestaurantState } from './restaurant/interfaces/restaurant.interface';
import { IUserInfoState } from './user-info/interfaces/user-info.interface';

export type AppState = Partial<{
  restaurant: IRestaurantState;
  restaurantDetails: IRestaurantDetailsState;
  itemFilters: IItemFilterState;
  offers: IOffersState;
  userInfo: IUserInfoState;
  registration: IRegistrationState;
}>;
