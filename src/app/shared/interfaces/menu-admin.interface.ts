import { IImage } from './image.interface';

export interface IMenuAdmin {
  id: number;
  name: string;
  items: Array<IMenuItem>;
}

export interface IMenuItem extends IImage {
  id: number;
  name: string;
  description: string;
  ingredeints: string;
  price: number;
  nutritionValue: Array<INutritionValue>;
}

export interface INutritionValue {
  id: number;
  name: string;
  quantity: string;
  unit: string;
}
