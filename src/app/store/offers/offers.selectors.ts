import { AppState } from '../app.state';

export const fetchOffersList = (state: AppState) =>
  state.offers?.offersList || [];
