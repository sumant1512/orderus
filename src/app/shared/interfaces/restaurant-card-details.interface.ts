import { IItemFilter } from 'src/app/store/item-filter/interfaces/item-filter.interface';
import { IImage } from './image.interface';

export interface IRestaurantCardDetail extends IImage {
  id: number;
  name: string;
  deliveryTime: string;
  minimumPrice: string;
  productList?: Array<IItemFilter>;
  cartProducts?: Array<string>;
}
