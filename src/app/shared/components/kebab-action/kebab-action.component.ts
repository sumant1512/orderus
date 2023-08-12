import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KebabActionService } from '../../services/kebab-action.service';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';
import { ActionList } from 'src/app/Restaurant/restaurant-shared/constants/actions';

@Component({
  selector: 'app-kebab-action',
  templateUrl: './kebab-action.component.html',
  styleUrls: ['./kebab-action.component.scss'],
})
export class KebabActionComponent {
  @Input() id!: number;
  @Input() prefix!: string;
  @Input() isActionEnabled: boolean = true;
  @Input() actionList: Array<IAction> = ActionList;

  @Output() selectedActionEvent = new EventEmitter<IAction>();

  isActionHidden = true;

  constructor(private kebabActionService: KebabActionService) {}

  emitEvent(action: IAction): void {
    this.selectedActionEvent.emit(action);
  }

  closeAction(): void {
    this.kebabActionService.closeAction();
  }

  openAction(id: string): void {
    this.kebabActionService.openAction(id);
  }
}
