import { IRestaurantReceivedOrdersState } from './interfaces/restaurant-received-orders.interface';
import {
  RestaurantReceivedOrdersActions,
  RestaurantReceivedOrdersActionsUnion,
} from './restaurant-received-orders.actions';

export const initialRestaurantReceivedOrdersState: IRestaurantReceivedOrdersState =
  {
    restaurantReceivedOrdersList: [],
  };

export function RestaurantReceivedOrdersReducer(
  state = initialRestaurantReceivedOrdersState,
  action: RestaurantReceivedOrdersActionsUnion
) {
  switch (action.type) {
    case RestaurantReceivedOrdersActions.FETCHED_RESTAURANT_RECEIVED_ORDERS:
      return {
        ...state,
        restaurantReceivedOrdersList: action.payload,
      };
    default:
      return state;
  }
}
