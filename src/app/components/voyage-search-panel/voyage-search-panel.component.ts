import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Voyage } from '../../services/entities.service';
import { provideNativeDateAdapter } from '@angular/material/core';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
];
@Component({
  selector: 'app-voyage-search-panel',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MATERIAL_MODULES, FormsModule, ReactiveFormsModule, JsonPipe],


  templateUrl: './voyage-search-panel.component.html',
  styleUrl: './voyage-search-panel.component.scss'
})
export class VoyageSearchPanelComponent implements OnInit {

  @Input() dataSource: any;
  searchForm!: FormGroup;
  departureDate = '';
  arrivalStation = '';
  departureStation = '';

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(VOYAGES);
    this.searchFormInit();
    /* Filter predicate used for filtering table per different columns
    *  */
    this.dataSource.filterPredicate = this.getFilterPredicate();
  }

  /* this method well be called for each row in table  */
  getFilterPredicate() {
    return (row: Voyage, filters: string) => {
      // split string per '$' to array
      const filterArray = filters.split('$');
      const departureDate = filterArray[0];
      const departureStation = filterArray[1];
      const arrivalStation = filterArray[2];

      const matchFilter = [];

      // Fetch data from row
      const columnDepartureDate = row.departureDate;
      const columnDepartureStation = row?.route?.departureStation?.name;
      const columnArrivalStation = row?.route?.arrivalStation?.name;

      // verify fetching data by our searching values
      const customFilterDD = columnDepartureDate?.toDateString().toLowerCase().includes(departureDate);
      const customFilterDS = columnDepartureStation?.toLowerCase().includes(departureStation);
      const customFilterAS = columnArrivalStation?.toLowerCase().includes(arrivalStation);

      // push boolean values into array
      matchFilter.push(customFilterDD);
      matchFilter.push(customFilterDS);
      matchFilter.push(customFilterAS);

      // return true if all values in array is true
      // else return false
      return matchFilter.every(Boolean);
    };
  }

  applyFilter() {
    const date = this.searchForm.get('departureDate')?.value;
    const as = this.searchForm.get('arrivalStation')?.value;
    const ds = this.searchForm.get('departureStation')?.value;

    this.departureDate = (date === null || date === '') ? '' : date.toDateString();
    this.arrivalStation = as === null ? '' : as;
    this.departureStation = ds === null ? '' : ds;

    // create string of our searching values and split if by '$'
    const filterValue = this.departureDate + '$' + this.departureStation + '$' + this.arrivalStation;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  private searchFormInit() {
    this.searchForm = new FormGroup({
      arrivalStation: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      departureStation: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      departureDate: new FormControl('')
    });
  }
}
