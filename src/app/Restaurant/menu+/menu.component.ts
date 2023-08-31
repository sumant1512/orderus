import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EHeadingType } from 'src/app/shared/enum/heading-type.enum';
// import { IMenuItem } from 'src/app/shared/interfaces/menu-admin.interface';
import { ActionList } from '../restaurant-shared/constants/actions';
import { IAction } from '../restaurant-shared/interfaces/action.interface';
import {
  IRestaurantMenuCategories,
  IRestaurantMenuItem,
} from './restaurant-menu-store/interfaces/restaurant-menu.interface';
import { RestaurantMenuFacade } from './restaurant-menu-store/restaurant-menu.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  headingTypeList = EHeadingType;
  menuItemList: Array<IRestaurantMenuItem> = [];
  categoryList: Array<IRestaurantMenuCategories> = [];

  actionList: Array<IAction> = ActionList;

  selectedCategoryId: number = 1;
  selectedMenuId!: number;
  selectedAction: IAction = ActionList[0];

  constructor(
    private modalService: NgbModal,
    private restaurantMenuFacade: RestaurantMenuFacade
  ) {
    this.restaurantMenuFacade.fetchRestaurantMenuCategories();
  }

  ngOnInit(): void {
    this.getCategoriesList();
    this.getMenuByCategories();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCategoriesList(): void {
    this.subscription.add(
      this.restaurantMenuFacade.restaurantMenuCategoriesListState.subscribe(
        (categories) => {
          this.categoryList = categories;
          if (this.categoryList?.length) {
            this.selectCategory(this.categoryList[0].id);
          }
        }
      )
    );
  }

  getMenuByCategories(): void {
    this.subscription.add(
      this.restaurantMenuFacade.restaurantMenuItemListState.subscribe(
        (menuItems) => {
          this.menuItemList = menuItems;
        }
      )
    );
  }

  action($event: IAction, modalName: any, modalSize?: string): void {
    this.selectedAction = $event;
    this.open(modalName, modalSize);
  }

  open(modal: any, modalSize?: string): void {
    if (modalSize) {
      this.modalService.open(modal, { windowClass: modalSize });
    } else {
      this.modalService.open(modal);
    }
  }

  deleteMenu(id: number): void {
    console.log(id);
  }

  dublicateMenu(menu: IRestaurantMenuItem): void {
    console.log(menu);
  }

  getNameById(id: number): string {
    const foundItem = this.categoryList.find((item) => item.id === id);
    return foundItem ? foundItem.name : '';
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
    this.restaurantMenuFacade.fetchRestaurantMenuItems(this.selectedCategoryId);
  }
}
