import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-tk-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  visibleSidebar1 = false;

  constructor() { }

  ngOnInit() {
    // $('#juanolobutton').click(function(){
    //   $('.juanolo').toggle(200);
    // });
  }

  toggleSidebar(){
    this.visibleSidebar1 = !this.visibleSidebar1;
  }

}
