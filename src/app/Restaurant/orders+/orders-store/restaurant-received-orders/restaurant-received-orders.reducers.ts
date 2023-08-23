import { IRestaurantReceivedOrdersState } from './interfaces/restaurant-received-orders.interface';
import {
  RestaurantReceivedOrdersActions,
  RestaurantReceivedOrdersActionsUnion,
} from './restaurant-received-orders.actions';

export const initialRestaurantReceivedOrdersState: IRestaurantReceivedOrdersState =
  {
    activeRestaurantReceivedOrdersList: [],
    openRestaurantReceivedOrdersList: [],
    deliveredRestaurantReceivedOrdersList: [],
  };

export function RestaurantReceivedOrdersReducer(
  state = initialRestaurantReceivedOrdersState,
  action: RestaurantReceivedOrdersActionsUnion
) {
  switch (action.type) {
    case RestaurantReceivedOrdersActions.FETCHED_RESTAURANT_RECEIVED_DELIVERED_ORDERS:
      return {
        ...state,
        deliveredRestaurantReceivedOrdersList: action.payload,
      };
    case RestaurantReceivedOrdersActions.FETCHED_RESTAURANT_RECEIVED_OPEN_ORDERS:
      return {
        ...state,
        openRestaurantReceivedOrdersList: action.payload,
      };
    case RestaurantReceivedOrdersActions.FETCHED_RESTAURANT_RECEIVED_ACTIVE_ORDERS:
      return {
        ...state,
        activeRestaurantReceivedOrdersList: action.payload,
      };
    default:
      return state;
  }
}
