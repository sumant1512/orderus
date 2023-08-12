import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-icon',
  templateUrl: './edit-icon.component.html',
  styleUrls: ['./edit-icon.component.scss'],
})
export class EditIconComponent {
  @Input() color: string = 'black';
}
