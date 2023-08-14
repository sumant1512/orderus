import { IRestaurantPromotions } from './restaurant-promotions/interfaces/restaurant-promotions.interface';

export type RestaurantPromotionsAppState = Partial<{
  restaurantPromotionsList: Array<IRestaurantPromotions>;
}>;
