import { Component, OnInit } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
// import {CheckboxModule} from 'pr'
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'triskell-angular';
  selectedValues: string[] = [];
  value: Date;
  constructor() { }

  ngOnInit() {
  }
}
