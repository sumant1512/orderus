import { IImage } from 'src/app/shared/interfaces/image.interface';

export interface IOffers extends IImage {
  id: number;
  offerCardHeader: string;
  offer?: string;
  typeLabel: string;
  type: string;
}

export interface IOffersState {
  offersList: Array<IOffers>;
}
