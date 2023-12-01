import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-hedar',
  templateUrl: './hedar.component.html',
  styleUrls: ['./hedar.component.scss'],
})
export class HedarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/Home',
        // aria-current:'page'
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/Bills',
      },
      {
        label: 'Debt',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Debit',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: '/Debit',
          },
          {
            label: 'credit',
            icon: 'pi pi-fw pi-video',
            routerLink: '/credit',
          },
        ],
      },
      {
        label: 'dataentr',
        icon: 'pi pi-fw pi-calendar',
        routerLink:'/dataentr',

      },
    ];
  }
}
