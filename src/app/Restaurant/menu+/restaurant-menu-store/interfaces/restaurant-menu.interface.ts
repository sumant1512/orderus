import { IImage } from 'src/app/shared/interfaces/image.interface';
import {
  ERestaurantCategories,
  ERestaurantMenuItem,
} from '../enum/restaurant-menu.enum';

export interface IRestaurantMenuItem extends IImage {
  [ERestaurantMenuItem.ID]: number;
  [ERestaurantMenuItem.NAME]: string;
  [ERestaurantMenuItem.IMG]: string;
  [ERestaurantMenuItem.PRICE]: string;
  [ERestaurantMenuItem.DESCRIPTION]: string;
  [ERestaurantMenuItem.INGREDEINTS]?: string;
  [ERestaurantMenuItem.NUTRITIONAL_VALUE]: string;
}

export interface IRestaurantMenuCategories {
  [ERestaurantCategories.ID]: number;
  [ERestaurantCategories.NAME]: string;
  [ERestaurantCategories.NO_OF_ITEMS]: string;
}

export interface IRestaurantMenuState {
  restaurantMenuItemList: Array<IRestaurantMenuItem>;
  restaurantMenuCategoriesList: Array<IRestaurantMenuCategories>;
}
