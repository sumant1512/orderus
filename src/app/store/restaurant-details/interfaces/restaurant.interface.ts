import { IImage } from 'src/app/shared/interfaces/image.interface';
import { IProductThumbnail } from 'src/app/shared/interfaces/product-thumbnail.interface';

export interface IRestaurantDetailsState extends IImage {
  id: number;
  name: string;
  about: '';
  deliveryTime: string;
  minimumPrice: string;
  productList?: Array<IProductThumbnail>;
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
