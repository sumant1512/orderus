export const APP_ROUTES = {
  HOME: '',
  RESTAURANTS: 'restaurants',
  DEALS: 'deals',
  MY_ORDERS: 'my-orders',
  CART: 'cart',
  CHECKOUT: 'checkout',
  PROFILE: 'profile',
  LOGIN: 'login',
  FORGET_PASSWORD: 'forget-password',
  REGISTRATION: 'registration',
  VERIFY: 'verify',
  ADMIN: {
    PARENT: 'admin',
    CHILD_ROUTES: {
      DASHBOARD: 'dashboard',
      ORDERS: 'orders',
      CUSTOMERS: 'customers',
      MENU: 'menu',
      PROMOTIONS: 'promotions',
    },
  },
  RESTAURANT: {
    PARENT: 'restaurant',
    CHILD_ROUTES: {
      DASHBOARD: 'dashboard',
      ORDERS: 'orders',
      CUSTOMERS: 'customers',
      MENU: 'menu',
      PROMOTIONS: 'promotions',
    },
  },
  DELIVERY: {
    PARENT: 'delivery',
    CHILD_ROUTES: {
      DASHBOARD: 'dashboard',
      ORDERS: 'orders',
      CUSTOMERS: 'customers',
      MENU: 'menu',
      PROMOTIONS: 'promotions',
    },
  },
};
