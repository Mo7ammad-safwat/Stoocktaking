import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiconttService } from 'src/app/sherde/apicontt.service';

@Component({
  selector: 'app-data-enter',
  templateUrl: './data-enter.component.html',
  styleUrls: ['./data-enter.component.scss'],
})
export class DataEnterComponent {
  [x: string]: any;
  myForm: FormGroup;
  // address: FormArray;

  // dataLoaded = false;

  // singleData: any;
  // singleDataLoaded = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dataService: ApiconttService
  ) {
    this.myForm = this.fb.group({
      nameCompany: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z ]*')],
      ],
      nameDealer: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]*$')],
      ],
      bollNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      invoiceDate: [null, Validators.required],
      address: this.fb.array([]),
    });
  }

  get addresses() {
    return this.myForm.get('address') as FormArray;
  }

  addAddress() {
    const addressGroup = this.fb.group({
      productName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z]*')],
      ],
      class: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      count: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.min(1),
        ],
      ],
      price: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$'),
          Validators.min(0.01),
        ],
      ],
    });

    this.addresses.push(addressGroup);
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.dataService.postData(formData).subscribe({
        next: (response) => {
          console.log('Data added successfully:', response);
          // Reload the data or redirect user
        },
        error: (error) => {
          console.error('Error adding data:', error);
          // Show error message to user
        },
      });
    } else {
      console.error('Form is invalid. Please fill in all required fields.');
      // Show validation errors
    }
  }
}
