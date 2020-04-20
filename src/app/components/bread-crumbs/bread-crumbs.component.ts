
import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {
  private items: any[];
  private titleVariable: string;

  constructor(
    private router: Router
  ) {
    this.getRouteData().subscribe(
      data => {
        this.titleVariable = data.title;
        this.items = [
          {label : 'Pimientoolbar'},
          {label : this.titleVariable}
        ];
      }
    );
  }

  ngOnInit() {
  }

  getRouteData() {
    return this.router.events
      .pipe(
        filter(evento => evento instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
        map((event: ActivationEnd) => {
          return event.snapshot.data;
        })
      );
  }

}
