import { IImage } from './image.interface';

export interface ISettings extends IImage {
  id: number;
  name: string;
  description: string;
}
