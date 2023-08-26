import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-material-confirm-dialog',
  templateUrl: './material-confirm-dialog.component.html',
  styleUrls: ['./material-confirm-dialog.component.scss'],
})
export class MaterialConfirmDialogComponent {
  message: string = 'Are you sure?';
  confirmButtonText = 'Yes';
  cancelButtonText = 'Cancel';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<MaterialConfirmDialogComponent>
  ) {
    if (this.data) {
      this.message = this.data.message || this.message;
      if (this.data.buttonText) {
        this.confirmButtonText =
          this.data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText =
          this.data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
