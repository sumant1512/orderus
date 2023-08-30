import { IImage } from 'src/app/shared/interfaces/image.interface';
import { ERestaurantMenuItem } from '../enum/restaurant-menu.enum';

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
  [ERestaurantMenuItem.ID]: number;
  [ERestaurantMenuItem.NAME]: string;
}

export interface IRestaurantMenuState {
  restaurantMenuItemList: Array<IRestaurantMenuItem>;
  restaurantMenuCategoriesList: Array<IRestaurantMenuCategories>;
}
