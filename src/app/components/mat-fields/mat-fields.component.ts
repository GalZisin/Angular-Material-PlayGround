import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-mat-fields',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule
  ],
  templateUrl: './mat-fields.component.html',
  styleUrl: './mat-fields.component.scss'
})
export class MatFieldsComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      input1: ['', Validators.required],
      select1: ['', Validators.required],
      select2: ['', Validators.required],
      radioGroup: ['option1', Validators.required]
      // Define more form controls here
    });
  }
}
