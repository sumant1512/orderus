import { EPromotionStatus } from 'src/app/store/promotion/enum/promotion.enum';

export interface ITab {
  id: number;
  name: string;
  code?: EPromotionStatus;
}
