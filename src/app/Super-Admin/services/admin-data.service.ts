import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { IAdmin } from '../interfaces/admin.interface';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminDataService {
  action: Subject<IAction> = new ReplaySubject<IAction>();
  selectedAdminDetails: Subject<IAdmin> = new ReplaySubject<IAdmin>();

  constructor() {}

  setAction(action: IAction): void {
    this.action.next(action);
  }

  setSelectedAdmin(admin: IAdmin): void {
    this.selectedAdminDetails.next(admin);
  }
}
