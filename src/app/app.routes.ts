import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { MatFilterTableComponent } from './components/mat-filter-table/mat-filter-table.component';
import { MatFieldsComponent } from './components/mat-fields/mat-fields.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/table', pathMatch: 'full'
    },
    { path: 'table', component: TableComponent },
    { path: 'filter-table', component: MatFilterTableComponent },
    { path: 'mat-fields', component: MatFieldsComponent }
];
