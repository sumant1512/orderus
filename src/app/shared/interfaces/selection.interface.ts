import { IImage } from './image.interface';

export interface ISelection {
  id: number;
  name: string;
  itemsCount: number;
  items: Array<IItems>;
}

export interface IItems extends IImage {
  id: number;
  name: string;
  description: string;
  ingredeints: string;
  price: number;
  nurtitionValue: Array<INutritionValue>;
}

export interface INutritionValue {
  id: number;
  name: string;
  quantity: string;
  unit: string;
}
