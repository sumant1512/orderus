import { IItemFilterState } from './interfaces/item-filter.interface';
import {
  ItemFilterActions,
  ItemFilterActionsUnion,
} from './item-filter.actions';

export const initialItemFilterState: IItemFilterState = {
  itemFilterList: [],
};

export function ItemFilterReducer(
  state = initialItemFilterState,
  action: ItemFilterActionsUnion
) {
  switch (action.type) {
    case ItemFilterActions.FETCHED_ITEM_FILTERS:
      return {
        ...state,
        itemFilterList: action.payload,
      };
    default:
      return state;
  }
}
