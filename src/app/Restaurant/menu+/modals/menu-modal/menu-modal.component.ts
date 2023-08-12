import { Component, Input } from '@angular/core';
import { MenuItemForm } from './menu-item.form';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';
import { EAction } from 'src/app/Restaurant/restaurant-shared/enum/action.enum';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss'],
})
export class MenuModalComponent {
  @Input() action!: IAction;
  @Input() selectedMenuId!: number;
  @Input() modal!: any;

  menuItemForm = MenuItemForm();

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
