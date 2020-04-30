import { Component, OnInit } from '@angular/core';
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
  firebase: {
    apiKey: "AIzaSyCjYqZIJvuBgcfi0R79tOJqkHIOaBuq-JY",
    authDomain: "tk-angular-cf0bb.firebaseapp.com",
    databaseURL: "https://tk-angular-cf0bb.firebaseio.com",
    projectId: "tk-angular-cf0bb",
    storageBucket: "tk-angular-cf0bb.appspot.com",
    messagingSenderId: "739027544170",
    appId: "1:739027544170:web:324338f56371ded4a68213"
  };
  constructor() { }

  ngOnInit() {
   
  }
}
