import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiconttService } from 'src/app/sherde/apicontt.service';
import { AddressItem } from 'src/app/sherde/pordact';

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
      nameCompany: [''],
      nameDealer: [''],
      bollNumber: [null],
      invoiceDate: [null],
      address: this.fb.array([]),
    });
  }

  get addresses() {
    return this.myForm.get('address') as FormArray;
  }

  addAddress() {
    const addressGroup = this.fb.group({
      productName: [''],
      class: [''],
      count: [''],
      price: [''],
    });

    this.addresses.push(addressGroup);
  }

  onSubmit() {
    // if (this.myForm.valid) {
    //   const formData = this.myForm.value;
    //   this.http.post('http://localhost:3000/bill', formData)
    //     .subscribe(
    //       (response) => {
    //         console.log('Form submitted successfully', response);
    //       },
    //       (error) => {
    //         console.error('Error submitting form', error);
    //       }
    //     );
    // } else {
    //   console.error('Form is invalid. Please fill in all required fields.');
    // }

    const formData = this.myForm.value;

    this.dataService.postData(formData).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
        // Reload the data after addition
        // this.loadData();
      },
      (error) => {
        console.error('Error adding data:', error);
      }
    );
         const prodacts: AddressItem[] = this.addresses.value;


    this.dataService.postsinglData(prodacts).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
        // Reload the data after addition
        // this.loadData();
      },
      (error) => {
        console.error('Error adding data:', error);
      }
    );
  }
}
