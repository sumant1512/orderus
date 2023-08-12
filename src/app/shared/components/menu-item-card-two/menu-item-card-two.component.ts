import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuItem } from '../../interfaces/menu-admin.interface';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';
import { ActionList } from 'src/app/Restaurant/restaurant-shared/constants/actions';

@Component({
  selector: 'app-menu-item-card-two',
  templateUrl: './menu-item-card-two.component.html',
  styleUrls: ['./menu-item-card-two.component.scss'],
})
export class MenuItemCardTwoComponent {
  @Input() menuItem!: IMenuItem;
  @Input() isActionEnabled: boolean = true;

  @Output() editEvent = new EventEmitter<IAction>();
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() dublicateEvent = new EventEmitter<IMenuItem>();
  itemCount = 0;
  actionList = ActionList;

  updateProductCount(action: string): void {
    if (action === 'add') {
      this.itemCount += 1;
    }
    if (action === 'sub' && this.itemCount > 0) {
      this.itemCount -= 1;
    }
  }

  emitEditEvent(action: IAction): void {
    this.editEvent.emit(action);
  }

  emitDeleteEvent(id: number): void {
    this.deleteEvent.emit(id);
  }

  emitDublicateEvent(menuItem: IMenuItem): void {
    this.dublicateEvent.emit(menuItem);
  }
}
