import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    //add class to login's html tag
    var htmlTag = document.querySelector('html');
    htmlTag.classList.add('loginPage');
  }

  login(){
    // aqui navegar a la home page
    this.router.navigate(['home']);
  }
}
