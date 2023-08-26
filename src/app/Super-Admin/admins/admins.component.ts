import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Subscription } from 'rxjs';
import { EAdmin } from '../enum/admin-registration.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuItemAction } from 'src/app/angular-material/components/material-table/material-table.interface';
import { EAction } from 'src/app/Restaurant/restaurant-shared/enum/action.enum';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';
import {
  AdminTableColumns,
  adminActionList,
} from '../constants/admin.constant';

interface IAdmin {
  [EAdmin.ID]: number;
  [EAdmin.NAME]: string;
  [EAdmin.USER_NAME]: string;
  [EAdmin.PASSWORD]: string;
  [EAdmin.TOKEN]: string;
  [EAdmin.STATUS]: string;
  [EAdmin.CREATED_ON]: string;
  [EAdmin.LAST_UPDATED_ON]: string;
}

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
})
export class AdminsComponent implements OnInit, OnDestroy {
  customerTableColumns: Array<any> = AdminTableColumns();
  actionList: Array<IAction> = adminActionList;
  subscription = new Subscription();
  adminList!: Array<IAdmin>;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAdmins();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateToAdminDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  getAdmins(): void {
    this.subscription.add(
      this.adminService.admins().subscribe((adminList) => {
        this.adminList = adminList;
      })
    );
  }

  action(event: IMenuItemAction): void {
    switch (event.action.id) {
      case EAction.View:
        if (event?.data?.id) {
          this.navigateToAdminDetails(event.data.id);
        }
        break;

      default:
        console.log(event);
        break;
    }
  }
}
