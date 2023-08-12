import { Component, Input } from '@angular/core';
import { MenuCategoryForm } from './menu-category.form';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
})
export class CategoryModalComponent {
  @Input() headingLabel: string = 'New';
  @Input() actionId: number = 1;
  @Input() modal!: any;

  menuCategoryForm = MenuCategoryForm();

  categoryAction(modal: any): void {
    this.modal.close();
    if (this.actionId < 1) {
      console.log(this.menuCategoryForm.value);
    }
    if (this.actionId === 1) {
      console.log(this.menuCategoryForm.value);
    }
  }
}
