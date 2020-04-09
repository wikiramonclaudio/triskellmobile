import { Component, OnInit } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';

declare var $;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var htmlTag = document.querySelector('html');
    // htmlTag.classList.remove('loginPage');
    $('html').removeClass('loginPage');
  }

}
