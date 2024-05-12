import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { MatFilterTableComponent } from './components/mat-filter-table/mat-filter-table.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/', pathMatch: 'full'
    },
    { path: 'table', component: TableComponent },
    { path: 'filter-table', component: MatFilterTableComponent }
];
