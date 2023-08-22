export const fetchdeliveredOrdersList = (state: any) => {
  return state?.delivery?.deliveryOrders?.deliveredOrdersList || [];
};

export const fetchOpenOrdersList = (state: any) => {
  return state?.delivery?.deliveryOrders?.openOrdersList || [];
};

export const fetchActiveOrdersList = (state: any) => {
  return state?.delivery?.deliveryOrders?.activeOrdersList || [];
};
