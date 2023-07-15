import { IImage } from 'src/app/shared/interfaces/image.interface';
import { IItemFilter } from '../../item-filter/interfaces/item-filter.interface';

export interface IRestaurantDetailsState extends IImage {
  id: number;
  name: string;
  about: '';
  deliveryTime: string;
  minimumPrice: string;
  productList?: Array<IItemFilter>;
  cartProducts?: Array<string>;
  thumbnailImage: IImage;
  locationImage: IImage;
  menuItemList: Array<IMenuItemCard>;
}

export interface IMenuItemCard extends IImage {
  id: number;
  name: string;
  description: string;
  price: number;
}
