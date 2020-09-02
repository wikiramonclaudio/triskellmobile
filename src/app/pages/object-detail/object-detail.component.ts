import { Component, OnInit } from '@angular/core';
import { MainTitleService } from '@src/app/services/main-title.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.scss']
})
export class ObjectDetailComponent implements OnInit {
  objectData: any;
  panelOpenState = false;
  objectName: string;
  navType: any = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public mainTitleService: MainTitleService
  ) {
  }

  ngOnInit(): void {
    this.navType = this.mainTitleService.getNavType();
    this.route.paramMap.subscribe(params => {
      // this.userType = params.get("name")
      this.objectName = params.get('name');
    });
    this.objectData = {
      '_id': '5ea173d014c7742df263d499',
      'index': 0,
      'guid': '5acdc26f-bfa5-4686-b19b-670951092d49',
      'isActive': false,
      'balance': '$1,399.59',
      'picture': 'http://placehold.it/32x32',
      'age': 25,
      'eyeColor': 'green',
      'name': this.objectName,
      'gender': 'female',
      'company': 'Project',
      'email': 'lawandamarsh@corecom.com',
      'phone': '+1 (915) 495-3559',
      'address': '902 Ludlam Place, Boomer, Guam, 227',
      'about': 'Id Lorem aliquip in voluptate offici iqua quis cillum officia enim dolor pariatur exercitation nulla exercitation.\r\n',
      'registered': '2019-07-22T01:20:46 -02:00',
      'latitude': 22.90725,
      'longitude': 97.993606,
      'friends': [
        {
          'id': 0,
          'name': 'Edwards Aguilar'
        },
        {
          'id': 1,
          'name': 'Mays Cardenas'
        },
        {
          'id': 2,
          'name': 'Villarreal Mckenzie'
        }
      ],
      'greeting': 'Hello, Lawanda Marsh! You have 6 unread messages.',
      'favoriteFruit': 'strawberry',
      'status': 'Deployment'
    };

    this.mainTitleService.setTitle(this.objectName);
    this.mainTitleService.setSubTitle('');
  }

}
