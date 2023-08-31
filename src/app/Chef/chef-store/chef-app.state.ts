import { IChefOrders } from './chef-orders/interfaces/chef-orders.interface';

export type ChefAppState = Partial<{
  chefOrdersList: Array<IChefOrders>;
}>;
