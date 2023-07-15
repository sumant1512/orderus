import { IOffersState } from './interfaces/offers.interface';
import { OffersActions, OffersActionsUnion } from './offers.actions';

export const initialOffersState: IOffersState = {
  offersList: [],
};

export function OffersReducer(
  state = initialOffersState,
  action: OffersActionsUnion
) {
  switch (action.type) {
    case OffersActions.FETCHED_OFFERS:
      return {
        ...state,
        offersList: action.payload,
      };
    default:
      return state;
  }
}
