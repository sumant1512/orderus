import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { EPromotionStatus } from './enum/promotion.enum';
import { IPromotion } from './interfaces/promotion.interface';

export const fetchPromotionList = (state: AppState) =>
  state.promotion?.promotionList || [];

export const selectPromotionByStatus = (status: EPromotionStatus) =>
  createSelector(fetchPromotionList, (state: Array<IPromotion>) =>
    state?.filter((promotion) => promotion.status === status)
  );
