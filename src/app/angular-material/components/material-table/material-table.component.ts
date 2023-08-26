import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IMenuItemAction } from './material-table.interface';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent implements OnChanges {
  dataSource!: any;
  columns!: Array<any>;
  displayedColumns!: Array<any>;
  selectedRow!: any;

  @Input() isPaginationEnabled: boolean = true;
  @Input() menuItems: Array<any> = [];
  @Input() pageSizeOptions: Array<number> = [10, 20, 30];

  @Input() set tableData(value: Array<any>) {
    this.dataSource = new MatTableDataSource(value);
  }

  @Input() set columnList(value: Array<any>) {
    this.columns = value;
    this.setColumns();
  }

  @Output() menuEvent = new EventEmitter<IMenuItemAction>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnChanges(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  setColumns(): void {
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }

  selectRow(row: any): void {
    this.selectedRow = row;
  }

  emitAction(action: any): void {
    this.menuEvent.emit({ action, data: this.selectedRow });
  }
}
