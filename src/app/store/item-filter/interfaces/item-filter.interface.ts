import { IImage } from 'src/app/shared/interfaces/image.interface';

export interface IItemFilter extends IImage {
  id: number;
  name: string;
}

export interface IItemFilterState {
  itemFilterList: Array<IItemFilter>;
}
