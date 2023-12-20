import { Component, OnInit } from '@angular/core';
import { ApiconttService } from 'src/app/sherde/apicontt.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
})
export class BillsComponent implements OnInit {
  invoice: any;

  constructor(private dataService: ApiconttService) {}

  ngOnInit(): void {
    this.getInvoiceData();
  }

  getInvoiceData(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.invoice = data;
        console.log(data)
      },
      (error) => {
        console.error('Error fetching invoice data:', error);
      }
    );

    console.log(this.invoice);
  }

  getTotal(): number {
    return (
      this.invoice?.address?.reduce(
        (total: number, item: { count: number; price: number; }) => total + item.count * item.price,
        0
      ) || 0
    );
  }
}
