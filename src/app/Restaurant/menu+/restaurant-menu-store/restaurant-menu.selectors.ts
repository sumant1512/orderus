export const fetchRestaurantMenuItemList = (state: any) =>
  state.restaurant?.restaurantMenu?.restaurantMenuItemList || [];

export const fetchRestaurantMenuCategoriesList = (state: any) =>
  state.restaurant?.restaurantMenu?.restaurantMenuCategoriesList || [];
