import { Component, OnInit } from '@angular/core';
import { Customer } from './../../sherde/cvs';
import { CustomerService } from './../../sherde/custmser';

@Component({
  selector: 'app-creditor',
  templateUrl: './creditor.component.html',
  styleUrls: ['./creditor.component.scss'],
})
export class CreditorComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersMedium().then((data) => {
      this.customers = data;
    });
  }

  calculateCustomerTotal(name: string | undefined) {
    let total = 0;

    if (this.customers) {
      for (const customer of this.customers) {
        const representative = customer.representative;
        if (representative?.name === name) {
          total++;
        }
      }
    }

    return total;
  }
}

