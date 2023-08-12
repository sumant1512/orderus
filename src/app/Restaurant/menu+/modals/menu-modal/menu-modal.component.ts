import { Component, Input } from '@angular/core';
import { MenuItemForm } from './menu-item.form';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss'],
})
export class MenuModalComponent {
  @Input() headingLabel: string = 'New';
  @Input() actionId: number = 1;
  @Input() modal!: any;

  menuItemForm = MenuItemForm();

  itemAction(modal: any): void {
    this.modal.close();
    if (this.actionId < 1) {
      console.log(this.menuItemForm.value);
    }
    if (this.actionId === 1) {
      console.log(this.menuItemForm.value);
    }
  }
}
