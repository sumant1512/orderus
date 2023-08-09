import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Subscription } from 'rxjs';
import { EAdmin } from '../enum/admin-registration.enum';
import { ActivatedRoute, Router } from '@angular/router';

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
  subscription = new Subscription();
  adminKeys = EAdmin;
  sortOrder = 1;
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

  onSortClick(colName: EAdmin, type: string) {
    if (type === 'number') {
      this.sortNumbers(colName);
    } else if (type === 'string') {
      this.sortString(colName);
    } else if (type === 'date') {
      this.sortNumbers(colName);
    }
    this.sortOrder = this.sortOrder === 1 ? -1 : 1;
  }

  sortNumbers(colName: EAdmin): void {
    if (this.sortOrder === 1) {
      this.adminList?.sort((a, b) => {
        return (
          (b[colName as keyof IAdmin] as any) -
          (a[colName as keyof IAdmin] as any)
        );
      });
    } else {
      this.adminList?.sort((a, b) => {
        return (
          (a[colName as keyof IAdmin] as any) -
          (b[colName as keyof IAdmin] as any)
        );
      });
    }
  }

  sortString(colName: EAdmin): void {
    if (this.sortOrder === 1) {
      this.adminList?.sort((a, b) => {
        return (a[colName as keyof IAdmin] as string).localeCompare(
          b[colName as keyof IAdmin] as string
        );
      });
    } else {
      this.adminList?.sort((a, b) => {
        return (b[colName as keyof IAdmin] as string).localeCompare(
          a[colName as keyof IAdmin] as string
        );
      });
    }
  }
}
