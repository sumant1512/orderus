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
}
