import { createSelector } from '@ngrx/store';
import { IRestaurantPromotions } from './interfaces/restaurant-promotions.interface';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';

export const fetchRestaurantPromotionsList = (state: any) =>
  state.restaurantPromotions?.restaurantPromotionsList || [];

export const selectRestaurantPromotionsByStatus = (status: ETabCode) =>
  createSelector(
    fetchRestaurantPromotionsList,
    (state: Array<IRestaurantPromotions>) =>
      state?.filter((promotion) => promotion.status === status)
  );
