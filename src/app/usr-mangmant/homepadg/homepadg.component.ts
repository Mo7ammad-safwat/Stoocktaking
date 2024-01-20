import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ApiconttService } from 'src/app/sherde/apicontt.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepadg',
  templateUrl: './homepadg.component.html',
  styleUrls: ['./homepadg.component.scss'],
})
export class HomepadgComponent implements OnInit {
  invoice: any;
  invoiceData: any;

  constructor(private dataService: ApiconttService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe(
      (data) => {
        this.invoice = data;
        this.invoiceData = this.getTotal(); // الآن يمكن استدعاء getTotal بأمان
        console.log(this.invoice);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getTotal() {
    const total: { productName: any; class: any; count: any; price: any; totalPrice: number; }[] = [];

    this.invoice.forEach((product: { address: any[]; }) => {
      product.address.forEach((addr: { productName: any; class: any; count: number; price: number; }) => {
        total.push({
          productName: addr.productName,
          class: addr.class,
          count: addr.count,
          price: addr.price,
          totalPrice: addr.count * addr.price,
        });
      });
    });

    return total;
  }
}
