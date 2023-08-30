import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItemForm } from './menu-item.form';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';
import { EAction } from 'src/app/Restaurant/restaurant-shared/enum/action.enum';
import { IImage } from 'src/app/shared/interfaces/image.interface';
import { RestaurantMenuFacade } from '../../restaurant-menu-store/restaurant-menu.facade';
import { IRestaurantMenuCategories } from '../../restaurant-menu-store/interfaces/restaurant-menu.interface';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss'],
})
export class MenuModalComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  menuItemForm = MenuItemForm();
  @Input() action!: IAction;
  @Input() selectedMenuId!: number;
  @Input() modal!: any;

  userInfo: IImage = {
    img: './../../../../../assets/menu-card/item-1.jpg',
    imgAlt: 'Item',
  };

  categoriesList: Array<IRestaurantMenuCategories> = [];
  selectedCategories: Array<number> = [1, 2];

  constructor(private restaurantMenuFacade: RestaurantMenuFacade) {}

  ngOnInit(): void {
    this.getCategoriesList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCategoriesList(): void {
    this.subscription.add(
      this.restaurantMenuFacade.restaurantMenuCategoriesListState.subscribe(
        (categoryList) => {
          this.categoriesList = categoryList;
        }
      )
    );
  }

  selectCategory(id: number): void {
    const index = this.selectedCategories.indexOf(id);
    if (index !== -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(id);
    }
  }

  isCategorySelected(id: number): boolean {
    return this.selectedCategories.includes(id);
  }

  itemAction(modal: any): void {
    this.modal.close();
    switch (this.action.id) {
      case EAction.Add:
        console.log(this.menuItemForm.value);
        break;
      case EAction.Edit:
        const updateReqBody = {
          id: this.selectedMenuId,
          ...this.menuItemForm.value,
        };
        console.log(updateReqBody);
        break;
      default:
        break;
    }
  }
}
