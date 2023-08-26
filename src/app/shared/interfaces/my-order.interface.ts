export interface IOrder {
  id: number;
  restaurantName: string;
  orderDateTime: Date;
  status?: string;
  amount: number;
}
