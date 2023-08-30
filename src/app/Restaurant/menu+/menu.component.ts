import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EHeadingType } from 'src/app/shared/enum/heading-type.enum';
import {
  IMenuAdmin,
  IMenuItem,
} from 'src/app/shared/interfaces/menu-admin.interface';
import { ActionList } from '../restaurant-shared/constants/actions';
import { IAction } from '../restaurant-shared/interfaces/action.interface';
import { IRestaurantMenuItem } from './restaurant-menu-store/interfaces/restaurant-menu.interface';
import { RestaurantMenuFacade } from './restaurant-menu-store/restaurant-menu.facade';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  headingTypeList = EHeadingType;
  menuItemList: Array<IRestaurantMenuItem> = [];
  categoryList: Array<IMenuAdmin> = [
    {
      id: 1,
      name: 'Breakfast menu',
      items: [
        {
          id: 1,
          name: 'Nigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
        {
          id: 2,
          name: 'Sigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
        {
          id: 3,
          name: 'Digri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Lunch menu',
      items: [
        {
          id: 4,
          name: 'Nigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
        {
          id: 6,
          name: 'Digri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: 'Dinner menu',
      items: [
        {
          id: 5,
          name: 'Sigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
        {
          id: 7,
          name: 'Nigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
        {
          id: 8,
          name: 'Sigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },

        {
          id: 10,
          name: 'Nigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
        {
          id: 11,
          name: 'Sigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 4,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 5,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 6,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
        {
          id: 9,
          name: 'Digri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 1,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 2,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 3,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Drinks menu',
      items: [
        {
          id: 12,
          name: 'Digri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: './../../../assets/menu-card/item-1.jpg',
          imgAlt: 'dish',
          nutritionValue: [
            {
              id: 7,
              name: 'Proteins',
              quantity: '7.11',
              unit: 'gm.',
            },
            {
              id: 8,
              name: 'Fats',
              quantity: '5.17',
              unit: 'gm.',
            },
            {
              id: 9,
              name: 'Carbohydrates',
              quantity: '18.40',
              unit: 'kkal (for 100 gm.)',
            },
          ],
        },
      ],
    },
  ];

  actionList: Array<IAction> = ActionList;

  selectedCategoryId: number = 1;
  selectedMenuId!: number;
  selectedAction: IAction = ActionList[0];

  constructor(
    private modalService: NgbModal,
    private restaurantMenuFacade: RestaurantMenuFacade
  ) {
    this.restaurantMenuFacade.fetchRestaurantMenuCategories();
    this.restaurantMenuFacade.fetchRestaurantMenuItems();
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

  dublicateMenu(menu: IMenuItem): void {
    console.log(menu);
  }

  getNameById(id: number): string {
    const foundItem = this.categoryList.find((item) => item.id === id);
    return foundItem ? foundItem.name : '';
  }

  getItemListById(id: number): Array<IMenuItem> {
    const foundItem = this.categoryList.find((item) => item.id === id);
    return foundItem ? foundItem.items : [];
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
  }
}
