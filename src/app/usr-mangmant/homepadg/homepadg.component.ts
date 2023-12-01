import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ApiconttService } from 'src/app/sherde/apicontt.service';
import { Pordact } from 'src/app/sherde/pordact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepadg',
  templateUrl: './homepadg.component.html',
  styleUrls: ['./homepadg.component.scss'],
})
export class HomepadgComponent implements OnInit {
  products!: Pordact[];

  constructor(private productService: ApiconttService) {}

  ngOnInit() {
      this.productService.getprdact().subscribe((data: Pordact[]) => {
          this.products = data;
      });
  }
}
