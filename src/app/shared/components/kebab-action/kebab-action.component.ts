import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IKebabAction } from '../../interfaces/kebab-action.interface';
import { KebabActionService } from '../../services/kebab-action.service';

@Component({
  selector: 'app-kebab-action',
  templateUrl: './kebab-action.component.html',
  styleUrls: ['./kebab-action.component.scss'],
})
export class KebabActionComponent {
  @Input() id!: number;
  @Input() prefix!: string;
  @Input() isActionEnabled: boolean = true;
  @Input() actionList: Array<IKebabAction> = [
    { id: 1, name: 'Update' },
    { id: 2, name: 'Delete' },
  ];

  @Output() selectedActionEvent = new EventEmitter<number>();

  isActionHidden = true;

  constructor(private kebabActionService: KebabActionService) {}

  emitEvent(id: number): void {
    this.selectedActionEvent.emit(id);
  }

  closeAction(): void {
    this.kebabActionService.closeAction();
  }

  openAction(id: string): void {
    this.kebabActionService.openAction(id);
  }
}
