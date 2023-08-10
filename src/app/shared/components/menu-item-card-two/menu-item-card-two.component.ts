import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu-admin.interface';

@Component({
  selector: 'app-menu-item-card-two',
  templateUrl: './menu-item-card-two.component.html',
  styleUrls: ['./menu-item-card-two.component.scss'],
})
export class MenuItemCardTwoComponent {
  @Input() menuItem!: IMenuItem;
  @Input() isActionEnabled: boolean = true;
  itemCount = 0;

  updateProductCount(action: string): void {
    if (action === 'add') {
      this.itemCount += 1;
    }
    if (action === 'sub' && this.itemCount > 0) {
      this.itemCount -= 1;
    }
  }
}
