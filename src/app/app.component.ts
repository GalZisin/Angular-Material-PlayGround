import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  router = inject(Router);
  title = signal<string>('material-playground!!!');

  simpleTable() {
    this.router.navigateByUrl(`/table`);
  }
  filterTable() {
    this.router.navigateByUrl(`/filter-table`);
  }
  ToForm() {
    this.router.navigateByUrl(`/mat-fields`);
  }
}
