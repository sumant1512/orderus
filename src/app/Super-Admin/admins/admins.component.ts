import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuItemAction } from 'src/app/angular-material/components/material-table/material-table.interface';
import { EAction } from 'src/app/Restaurant/restaurant-shared/enum/action.enum';
import { IAction } from 'src/app/Restaurant/restaurant-shared/interfaces/action.interface';
import {
  AdminTableColumns,
  adminActionList,
} from '../constants/admin.constant';
import { IAdmin } from '../interfaces/admin.interface';
import { AdminDataService } from '../services/admin-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MaterialConfirmDialogComponent } from 'src/app/angular-material/components/material-confirm-dialog/material-confirm-dialog.component';

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
  selectedAction: IAction = {
    id: EAction.Add,
    name: 'Add',
    heading: 'Create',
    btn: 'Save',
  };
  selectedAdmin!: IAdmin;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adminDataService: AdminDataService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAdmins();
    this.getCurrentAction();
    this.getSelectedAdmin();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCurrentAction(): void {
    this.subscription.add(
      this.adminDataService.action.subscribe((action: IAction) => {
        this.selectedAction = action;
      })
    );
  }

  getSelectedAdmin(): void {
    this.subscription.add(
      this.adminDataService.selectedAdminDetails.subscribe((admin: IAdmin) => {
        this.selectedAdmin = admin;
      })
    );
  }

  navigateToAdminDetails(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute,
    });
  }

  navigateToUpdateAdminDetails(id: number): void {
    this.router.navigate(['../', 'update', id], {
      relativeTo: this.activatedRoute,
    });
  }

  getAdmins(): void {
    this.subscription.add(
      this.adminService.fetchAdmins().subscribe((adminList) => {
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
      case EAction.Edit:
        if (event?.data?.id) {
          this.adminDataService.setAction(event.action);
          this.adminDataService.setSelectedAdmin(event.data);
          this.navigateToUpdateAdminDetails(event.data.id);
        }
        break;
      case EAction.Delete:
        this.adminDataService.setAction(event.action);
        this.adminDataService.setSelectedAdmin(event.data);
        this.openDialog();
        break;

      default:
        console.log(event);
        break;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(MaterialConfirmDialogComponent, {
      data: {
        message: `Are you sure want to delete ${this.selectedAdmin.name}?`,
        buttonText: {
          ok: this.selectedAction.btn,
          cancel: 'No',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.adminService.deleteAdmin(this.selectedAdmin.id);
      }
    });
  }
}
