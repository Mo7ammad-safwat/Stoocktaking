import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creditor',
  templateUrl: './creditor.component.html',
  styleUrls: ['./creditor.component.scss']
})
export class CreditorComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      // other form controls
      // ...

      // Example of using FormArray
      addresses: this.fb.array([]),
    });
  }

  get addresses(): FormArray {
    return this.myForm.get('addresses') as FormArray;
  }

  // Helper method to add an address form group
  addAddress() {
    this.addresses.push(this.createAddressFormGroup());
  }

  // Helper method to remove an address form group
 

  // Helper method to create an address form group
  createAddressFormGroup() {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      // other address fields
    });
  }
}
