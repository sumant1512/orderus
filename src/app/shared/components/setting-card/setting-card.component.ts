import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISettings } from '../../interfaces/settings.interface';
import { EHeadingType } from '../../enum/heading-type.enum';

@Component({
  selector: 'app-setting-card',
  templateUrl: './setting-card.component.html',
  styleUrls: ['./setting-card.component.scss'],
})
export class SettingCardComponent {
  headingTypeList = EHeadingType;
  @Input() settingDetails!: ISettings;
  @Input() isSelected: boolean = false;

  @Output() selectedCardEvent = new EventEmitter<number>();

  emitEvent(id: number): void {
    this.selectedCardEvent.emit(id);
  }
}
