import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tk-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  visibleSidebar1 = true;

  constructor() { }

  ngOnInit() {
  }

}
