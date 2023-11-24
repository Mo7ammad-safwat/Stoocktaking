import { Component  } from '@angular/core';
import { FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-enter',
  templateUrl: './data-enter.component.html',
  styleUrls: ['./data-enter.component.scss']
})
export class DataEnterComponent  {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,private fdb: FormBuilder, private http: HttpClient) {
    this.myForm = this.fb.group({
      nameCompany: [''],
      nameDealer: [''],
      bollNumber: [null],
      invoiceDate: [null],
      address: this.fdb.array([]),
    });
  }

  get addresses() {
    return this.myForm.get('address') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.fdb.group({
      productName: [''],
      class: [""],
      count: [""],
      price: [""],
    }));
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
  
      // تحضير البيانات للإرسال
      // const postData = {
      //   nameCompany: formData.nameCompany,
      //   nameDealer: formData.nameDealer,
      //   bollNumber: formData.bollNumber,
      //   invoiceDate: formData.invoiceDate,
      //   addresses: formData.addresses.map((address: any) => ({
      //     productName: address.productName,
      //     class: address.class,
      //     count: address.count,
      //     price: address.price,
      //   })),
      // };
  
      this.http.post('http://localhost:3000/bill', formData)
        .subscribe(
          (response) => {
            console.log('Form submitted successfully', response);
          },
          (error) => {
            console.error('Error submitting form', error);
          }
        );
    } else {
      console.error('Form is invalid. Please fill in all required fields.');
    }
  }
  
}

