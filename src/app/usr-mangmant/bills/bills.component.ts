import { Component, OnInit } from '@angular/core';
import { ApiconttService } from 'src/app/sherde/apicontt.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  invoice: any;
  order = 'asc';

  constructor(private dataService: ApiconttService) {}

  ngOnInit(): void {
    this.getInvoiceData();
  }

  getInvoiceData(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.invoice = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching invoice data:', error);
      }
    );

    console.log(this.invoice);
  }
  toggleOrder() {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
  }


  getTotal() {
    let total = 0;
    this.invoice.forEach((product: { address: any[] }) => {
      product.address.forEach((addr: { count: number; price: number }) => {
        total += addr.count * addr.price;
      });
    });
    return total;
  }
}
