export interface IOrder {
  orderId: number;
  restaurantName: string;
  orderDateTime: string;
  status?: string;
  amount: number;
}
