import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KebabActionService {
  previousId!: string;

  closeAction(): void {
    var list = document.getElementById(`${this.previousId}`);
    list?.classList.add('hidden');
  }

  openAction(id: string): void {
    var list = document.getElementById(`${id}`);
    list?.classList.remove('hidden');
    this.previousId = id;
  }
}
