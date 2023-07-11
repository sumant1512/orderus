import { IImage } from 'src/app/shared/interfaces/image.interface';
import { IProductThumbnail } from 'src/app/shared/interfaces/product-thumbnail.interface';

export interface IRestaurant extends IImage {
  id: number;
  name: string;
  deliveryTime: string;
  minimumPrice: string;
  productList?: Array<IProductThumbnail>;
  cartProducts?: Array<string>;
}

export interface IRestaurantState {
  restaurantList: Array<IRestaurant>;
}
