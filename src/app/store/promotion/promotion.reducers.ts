import { IPromotionState } from './interfaces/promotion.interface';
import { PromotionActions, PromotionActionsUnion } from './promotion.actions';

export const initialPromotionState: IPromotionState = {
  promotionList: [],
};

export function PromotionReducer(
  state = initialPromotionState,
  action: PromotionActionsUnion
) {
  switch (action.type) {
    case PromotionActions.FETCHED_PROMOTIONS:
      return {
        ...state,
        promotionList: action.payload,
      };
    default:
      return state;
  }
}
