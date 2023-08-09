import { Component, Input } from '@angular/core';
import { IMenuItemCard } from 'src/app/store/restaurant-details/interfaces/restaurant-details.interface';

@Component({
  selector: 'app-menu-item-card-one',
  templateUrl: './menu-item-card-one.component.html',
  styleUrls: ['./menu-item-card-one.component.scss'],
})
export class MenuItemCardOneComponent {
  @Input() menuItem!: IMenuItemCard;
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
