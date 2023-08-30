export const fetchRestaurantReceivedDeliveredOrdersList = (state: any) => {
  return (
    state.restaurant.restaurantReceivedOrders
      .deliveredRestaurantReceivedOrdersList || []
  );
};

export const fetchRestaurantReceivedOpenOrdersList = (state: any) => {
  return (
    state.restaurant.restaurantReceivedOrders
      .openRestaurantReceivedOrdersList || []
  );
};

export const fetchRestaurantReceivedActiveOrdersList = (state: any) => {
  return (
    state.restaurant.restaurantReceivedOrders
      .activeRestaurantReceivedOrdersList || []
  );
};
