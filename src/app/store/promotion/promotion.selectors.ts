import { AppState } from '../app.state';

export const fetchPromotionList = (state: AppState) =>
  state.promotion?.promotionList || [];
