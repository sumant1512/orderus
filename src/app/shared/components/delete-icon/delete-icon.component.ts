import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  templateUrl: './delete-icon.component.html',
  styleUrls: ['./delete-icon.component.scss'],
})
export class DeleteIconComponent {
  @Input() color: string = 'black';
}
