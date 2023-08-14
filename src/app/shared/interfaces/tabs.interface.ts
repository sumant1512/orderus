import { ERestaurantPromotionsStatus } from 'src/app/Restaurant/promotions+/restaurant-promotions-store/restaurant-promotions/enum/restaurant-promotions.enum';

export interface ITab {
  id: number;
  name: string;
  code?: ERestaurantPromotionsStatus;
}
