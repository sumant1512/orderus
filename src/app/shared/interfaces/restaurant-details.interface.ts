import { IImage } from './image.interface';
import { IRestaurantCardDetail } from './restaurant-card-details.interface';

export interface IRestaurantDetails extends IRestaurantCardDetail {
  thumbnailImage: IImage;
}
