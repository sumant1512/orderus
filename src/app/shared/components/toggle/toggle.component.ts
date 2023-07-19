import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Output() selectedSection = new EventEmitter<string>();

  emitSelectedSection(section: string): void {
    this.selectedSection.emit(section);
  }
}
