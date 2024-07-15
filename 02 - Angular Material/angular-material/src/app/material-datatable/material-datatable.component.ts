import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DATA_MOVIES } from './model/data-movies';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortHeader } from '@angular/material/sort';

@Component({
  selector: 'app-material-datatable',
  templateUrl: './material-datatable.component.html',
  styleUrls: ['./material-datatable.component.scss']
})
export class MaterialDatatableComponent  implements AfterViewInit {
  public dataSource = new MatTableDataSource(DATA_MOVIES);
  public displayColumns: string[] = ['name', 'category', 'rating', 'year', 'director'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
