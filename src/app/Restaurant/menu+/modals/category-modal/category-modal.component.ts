import { Component, Input } from '@angular/core';
import { MenuCategoryForm } from './menu-category.form';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';
import { EAction } from 'src/app/Restaurant/restaurant-shared/enum/action.enum';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
})
export class CategoryModalComponent {
  @Input() action!: IAction;
  @Input() selectedCategoryId!: number;
  @Input() modal!: any;

  menuCategoryForm = MenuCategoryForm();

  categoryAction(): void {
    this.modal.close();
    switch (this.action.id) {
      case EAction.Add:
        console.log(this.menuCategoryForm.value);
        break;
      case EAction.Edit:
        const updateReqBody = {
          id: this.selectedCategoryId,
          ...this.menuCategoryForm.value,
        };
        console.log(updateReqBody);
        break;
      default:
        break;
    }
  }
}
