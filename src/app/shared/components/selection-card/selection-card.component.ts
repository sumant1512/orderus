import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EHeadingType } from '../../enum/heading-type.enum';
import { IMenuAdmin } from '../../interfaces/menu-admin.interface';

@Component({
  selector: 'app-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.scss'],
})
export class SelectionCardComponent {
  headingTypeList = EHeadingType;
  @Input() selectionDetails!: IMenuAdmin;
  @Input() isSelected: boolean = false;

  @Output() selectedCardEvent = new EventEmitter<number>();

  emitEvent(id: number): void {
    this.selectedCardEvent.emit(id);
  }
}
