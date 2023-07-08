import { IImage } from './image.interface';
import { IProductThumbnail } from './product-thumbnail.interface';

export interface IRestaurantCardDetail extends IImage {
  name: string;
  deliveryTime: string;
  minimumPrice: string;
  productList?: Array<IProductThumbnail>;
  cartProducts?: Array<string>;
}
