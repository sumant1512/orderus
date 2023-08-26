import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
})
export class MaterialTableComponent implements OnChanges {
  dataSource!: any;
  columns!: Array<any>;
  displayedColumns!: Array<any>;

  @Input() isPaginationEnabled: boolean = true;
  @Input() pageSizeOptions: Array<number> = [10, 20, 30];

  @Input() set tableData(value: Array<any>) {
    this.dataSource = new MatTableDataSource(value);
  }

  @Input() set columnList(value: Array<any>) {
    this.columns = value;
    this.setColumns();
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnChanges(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  setColumns(): void {
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }
}
