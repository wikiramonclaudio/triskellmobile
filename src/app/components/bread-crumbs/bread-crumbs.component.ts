
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
  private titleVariable :string;

  constructor(
    private router: Router
  ) {
    this.getRouteData().subscribe(
      data => {
        this.titleVariable = data.title;
      }
    )
  }

  ngOnInit() {
    this.items = [
      {label : this.titleVariable}
      // { label: 'Categories' },
      // { label: 'Sports' },
      // { label: 'Football' },
      // { label: 'Countries' },
      // { label: 'Spain' },
      // { label: 'F.C. Barcelona' },
      // { label: 'Squad' },
      // { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
    ];
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
