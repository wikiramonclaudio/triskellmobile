
import { Component, OnInit } from '@angular/core';
import { MainTitleService } from '@src/app/services/main-title.service';

declare var $;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private mainTitleService: MainTitleService
  ) { }

  ngOnInit() {
    // var htmlTag = document.querySelector('html');
    // htmlTag.classList.remove('loginPage');
    $('html').removeClass('loginPage');
    this.mainTitleService.setTitle('Triskell');
    this.mainTitleService.setSubTitle('Dashboard');
  }

}
