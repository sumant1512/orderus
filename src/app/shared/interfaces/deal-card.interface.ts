import { EDealBtn } from '../enum/deal-btn.enum';
import { IImage } from './image.interface';

export interface IDealCardDetail extends IImage {
  btnType: EDealBtn;
  name: string;
  validity: IValidity;
  restaurantType: string;
}

export interface IValidity {
  validityStartsFrom: string;
  validityEndsOn?: string;
  validityInfo?: string;
}
