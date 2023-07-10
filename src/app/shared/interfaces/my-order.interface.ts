export interface IOrder {
  orderId: number;
  restaurantName: string;
  orderDateTime: Date;
  status?: string;
  amount: number;
}
