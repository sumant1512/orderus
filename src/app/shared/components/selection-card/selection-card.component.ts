import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EHeadingType } from '../../enum/heading-type.enum';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';
import { IRestaurantMenuCategories } from 'src/app/Restaurant/menu+/restaurant-menu-store/interfaces/restaurant-menu.interface';

@Component({
  selector: 'app-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.scss'],
})
export class SelectionCardComponent {
  headingTypeList = EHeadingType;
  @Input() selectionDetails!: IRestaurantMenuCategories;
  @Input() actionList!: Array<IAction>;
  @Input() isActionEnabled: boolean = true;
  @Input() isSelected: boolean = false;

  @Output() selectedCardEvent = new EventEmitter<number>();
  @Output() selectedActionEvent = new EventEmitter<IAction>();

  isActionHidden = true;

  emitEvent(id: number): void {
    this.selectedCardEvent.emit(id);
  }

  emitActionEvent(action: IAction): void {
    this.selectedActionEvent.emit(action);
  }

  toggleAction(id: number): void {
    var list = document.getElementById(`${id}`);

    this.isActionHidden = !this.isActionHidden;
    this.isActionHidden
      ? list?.classList.add('hidden')
      : list?.classList.remove('hidden');
  }
}
