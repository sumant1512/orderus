import { IItemFilterState } from './item-filter/interfaces/item-filter.interface';
import { IOffersState } from './offers/interfaces/offers.interface';
import { IRestaurantDetailsState } from './restaurant-details/interfaces/restaurant-details.interface';
import { IRestaurantState } from './restaurant/interfaces/restaurant.interface';

export type AppState = Partial<{
  restaurant: IRestaurantState;
  restaurantDetails: IRestaurantDetailsState;
  itemFilters: IItemFilterState;
  offers: IOffersState;
}>;
