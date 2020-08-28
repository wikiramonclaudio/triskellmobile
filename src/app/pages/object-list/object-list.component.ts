import { MainTitleService } from './../../services/main-title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit {
  public items = [];
  public vista = 'lista';
  constructor(
    public mainTitleService: MainTitleService
  ) { }

  ngOnInit() {
    this.items = [
      {
        "_id": "5ea173d014c7742df263d499",
        "index": 0,
        "guid": "5acdc26f-bfa5-4686-b19b-670951092d49",
        "isActive": false,
        "balance": "$1,399.59",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "green",
        "name": "PRJ 001",
        "gender": "female",
        "company": "CORECOM",
        "email": "lawandamarsh@corecom.com",
        "phone": "+1 (915) 495-3559",
        "address": "902 Ludlam Place, Boomer, Guam, 227",
        "about": "Id Lorem aliquip in voluptate officia dolor esse officia enim dolor pariatur exercitation nulla exercitation.\r\n",
        "registered": "2019-07-22T01:20:46 -02:00",
        "latitude": 22.90725,
        "longitude": 97.993606,
        "tags": [
          "dolor",
          "exercitation",
          "consequat",
          "aliqua",
          "minim",
          "laboris",
          "do"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Edwards Aguilar"
          },
          {
            "id": 1,
            "name": "Mays Cardenas"
          },
          {
            "id": 2,
            "name": "Villarreal Mckenzie"
          }
        ],
        "greeting": "Hello, Lawanda Marsh! You have 6 unread messages.",
        "favoriteFruit": "strawberry"
      },
      {
        "_id": "5ea173d041cc1440778bcd25",
        "index": 1,
        "guid": "9cf79570-94db-4a8a-acaf-25afc945f73b",
        "isActive": false,
        "balance": "$1,190.65",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "eyeColor": "green",
        "name": "PRJ 002",
        "gender": "male",
        "company": "VORTEXACO",
        "email": "caldwellpena@vortexaco.com",
        "phone": "+1 (823) 530-2198",
        "address": "494 Perry Terrace, Spokane, Palau, 9696",
        "about": "Qui Lorem adipisicing minim velit eu. Quis anim enim. Amet  occaecat cupidatat ea exercitation. Ad qui enim aute occaecat.\r\n",
        "registered": "2015-04-23T04:03:48 -02:00",
        "latitude": -54.733013,
        "longitude": 4.545529,
        "tags": [
          "aute",
          "est",
          "mollit",
          "sint",
          "id",
          "anim",
          "non"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Blanca Frost"
          },
          {
            "id": 1,
            "name": "Reid Melendez"
          },
          {
            "id": 2,
            "name": "Cara Landry"
          }
        ],
        "greeting": "Hello, Caldwell Pena! You have 1 unread messages.",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5ea173d08c77be23ce41c968",
        "index": 2,
        "guid": "d334a1be-e76b-4102-9429-a1236886cf21",
        "isActive": false,
        "balance": "$2,974.62",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "eyeColor": "blue",
        "name": "PRJ 003",
        "gender": "male",
        "company": "PANZENT",
        "email": "lanerodriquez@panzent.com",
        "phone": "+1 (891) 531-2557",
        "address": "350 Strickland Avenue, Downsville, New Jersey, 8372",
        "about": "Non incididunt reprehenderit duis velit incididunt reprehenderit deserunt culpa duis eiusmod enim. Est ut et dolore magna.\r\n",
        "registered": "2016-03-31T08:05:47 -02:00",
        "latitude": 41.208864,
        "longitude": -145.725019,
        "tags": [
          "sunt",
          "ut",
          "laborum",
          "enim",
          "do",
          "exercitation",
          "et"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Charity Wilkins"
          },
          {
            "id": 1,
            "name": "Butler Pennington"
          },
          {
            "id": 2,
            "name": "Pace Adams"
          }
        ],
        "greeting": "Hello, Lane Rodriquez! You have 2 unread messages.",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5ea173d03af7cf711da23bfd",
        "index": 3,
        "guid": "eb93545f-037b-4dc0-8d51-659ec38118c4",
        "isActive": true,
        "balance": "$2,930.86",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "blue",
        "name": "PRJ 006",
        "gender": "male",
        "company": "CABLAM",
        "email": "garrisondavis@cablam.com",
        "phone": "+1 (886) 493-2285",
        "address": "433 Drew Street, Forbestown, Vermont, 4990",
        "about": "Fugiat occaecat esse in in nulla irure aliquip ipsum officia sit et in pariatur.\r\n",
        "registered": "2016-10-28T03:27:23 -02:00",
        "latitude": -76.631321,
        "longitude": -11.950976,
        "tags": [
          "consequat",
          "aute",
          "in",
          "proident",
          "fugiat",
          "commodo",
          "sunt"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Carly Washington"
          },
          {
            "id": 1,
            "name": "Margie Carver"
          },
          {
            "id": 2,
            "name": "Abbott Bender"
          }
        ],
        "greeting": "Hello, Garrison Davis! You have 7 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5ea173d02217151289cd472b",
        "index": 4,
        "guid": "711e11ea-e269-4fe9-bfd7-913d340ff72d",
        "isActive": true,
        "balance": "$2,079.61",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "green",
        "name": "PRJ 008",
        "gender": "female",
        "company": "ENERSOL",
        "email": "jonimurray@enersol.com",
        "phone": "+1 (854) 560-3287",
        "address": "164 Huntington Street, Ripley, Nebraska, 9052",
        "about": "Nostrud cillum aute fugiat mollit aliquip occaecat.\r\n",
        "registered": "2015-12-16T08:03:10 -01:00",
        "latitude": 7.245591,
        "longitude": 93.946926,
        "tags": [
          "consequat",
          "minim",
          "adipisicing",
          "dolor",
          "do",
          "irure",
          "dolore"
        ],
        "friends": [
          {
            "id": 0,
            "name": "Gale Erickson"
          },
          {
            "id": 1,
            "name": "Mollie Wagner"
          },
          {
            "id": 2,
            "name": "Judy Mcneil"
          }
        ],
        "greeting": "Hello, Joni Murray! You have 3 unread messages.",
        "favoriteFruit": "banana"
      }
    ];

    this.mainTitleService.setTitle('Project');
    this.mainTitleService.setSubTitle('');
  }

}
