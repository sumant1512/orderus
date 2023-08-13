import { IImage } from 'src/app/shared/interfaces/image.interface';
import {
  EPromotion,
  EPromotionStatus,
  EValidity,
} from '../enum/promotion.enum';

export interface IPromotion extends IImage {
  [EPromotion.ID]: number;
  [EPromotion.STATUS]: EPromotionStatus;
  [EPromotion.NAME]: string;
  [EPromotion.VALIDITY]?: IValidity;
  [EPromotion.RESTAURANT_NAME]: string;
}

export interface IValidity {
  [EValidity.VALIDITY_STARTS_FROM]?: string;
  [EValidity.VALIDITY_ENDS_ON]?: string;
  [EValidity.VALIDITY_INFO]?: string;
}

export interface IPromotionState {
  promotionList: Array<IPromotion>;
}
