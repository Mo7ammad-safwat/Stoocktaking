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
  data: Array<any> = [];
  // dataLoaded = false;

  singleData: any;
  singleDataLoaded = false;

  constructor(private dataService: ApiconttService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe(
      (response) => {
        return (this.data = response);
        // this.dataLoaded = true;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    console.log(this.data);
  }
}
