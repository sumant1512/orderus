export const fetchRestaurantActivePromotionsList = (state: any) =>
  state.restaurant.restaurantPromotions.activeRestaurantPromotionsList || [];

export const fetchRestaurantScheduledPromotionsList = (state: any) =>
  state.restaurant.restaurantPromotions.scheduledRestaurantPromotionsList || [];

export const fetchRestaurantExpiredPromotionsList = (state: any) =>
  state.restaurant.restaurantPromotions.expiredRestaurantPromotionsList || [];
