import { IImage } from 'src/app/shared/interfaces/image.interface';
import {
  ERestaurantPromotions,
  EValidity,
} from '../enum/restaurant-promotions.enum';
import { ETabCode } from 'src/app/shared/enum/tab-code.enum';

export interface IRestaurantPromotions extends IImage {
  [ERestaurantPromotions.ID]: number;
  [ERestaurantPromotions.STATUS]: ETabCode;
  [ERestaurantPromotions.NAME]: string;
  [ERestaurantPromotions.VALIDITY]?: IValidity;
  [ERestaurantPromotions.RESTAURANT_NAME]: string;
}

export interface IValidity {
  [EValidity.VALIDITY_STARTS_FROM]?: string;
  [EValidity.VALIDITY_ENDS_ON]?: string;
  [EValidity.VALIDITY_INFO]?: string;
}
