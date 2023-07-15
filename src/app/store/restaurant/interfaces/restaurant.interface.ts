import { IImage } from 'src/app/shared/interfaces/image.interface';
import { IItemFilter } from '../../item-filter/interfaces/item-filter.interface';

export interface IRestaurant extends IImage {
  id: number;
  name: string;
  deliveryTime: string;
  minimumPrice: string;
  productList?: Array<IItemFilter>;
  cartProducts?: Array<string>;
}

export interface IRestaurantState {
  restaurantList: Array<IRestaurant>;
}
