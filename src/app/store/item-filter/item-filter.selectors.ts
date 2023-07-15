import { AppState } from '../app.state';

export const fetchItemFilterList = (state: AppState) =>
  state.itemFilters?.itemFilterList || [];
