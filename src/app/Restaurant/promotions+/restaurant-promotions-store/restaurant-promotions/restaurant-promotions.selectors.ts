import { createSelector } from '@ngrx/store';
import { ETabCode } from './enum/restaurant-promotions.enum';
import { IRestaurantPromotions } from './interfaces/restaurant-promotions.interface';

export const fetchRestaurantPromotionsList = (state: any) =>
  state.restaurantPromotions?.restaurantPromotionsList || [];

export const selectRestaurantPromotionsByStatus = (status: ETabCode) =>
  createSelector(
    fetchRestaurantPromotionsList,
    (state: Array<IRestaurantPromotions>) =>
      state?.filter((promotion) => promotion.status === status)
  );
