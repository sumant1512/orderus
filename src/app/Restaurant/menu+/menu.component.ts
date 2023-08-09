import { Component } from '@angular/core';
import { EHeadingType } from 'src/app/shared/enum/heading-type.enum';
import {
  IItems,
  ISelection,
} from 'src/app/shared/interfaces/selection.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  headingTypeList = EHeadingType;
  categoryList: Array<ISelection> = [
    {
      id: 1,
      name: 'Breakfast menu',
      itemsCount: 17,
      items: [
        {
          id: 1,
          name: 'Nigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
      itemsCount: 17,
      items: [
        {
          id: 4,
          name: 'Nigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
      itemsCount: 17,
      items: [
        {
          id: 5,
          name: 'Sigri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
          img: '',
          imgAlt: '',
          nurtitionValue: [
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
      itemsCount: 17,
      items: [
        {
          id: 12,
          name: 'Digri set',
          description:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          ingredeints:
            'Loream ipsum dolar sit amet, pri atqui facete evertitur an, ea assum solet invidunt vim.',
          price: 16.8,
          img: '',
          imgAlt: '',
          nurtitionValue: [
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

  selectedCategoryId = 1;

  constructor() {}

  getNameById(id: number): string {
    const foundItem = this.categoryList.find((item) => item.id === id);
    return foundItem ? foundItem.name : '';
  }

  getItemListById(id: number): Array<IItems> {
    const foundItem = this.categoryList.find((item) => item.id === id);
    return foundItem ? foundItem.items : [];
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
  }
}
