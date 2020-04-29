import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './../../services/translation.service';

import {FormControl, Validators} from '@angular/forms';

import {LayoutModule} from '@angular/cdk/layout';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  chatMessages;
  translate: TranslateService;
  hide = true;
  constructor(
    private router: Router,
    public translationService: TranslationService
  ) { }

  

  ngOnInit() {
    this.translate = this.translationService.getTranslateService();
    //add class to login's html tag
    var htmlTag = document.querySelector('html');
    htmlTag.classList.add('loginPage');
  }

  login() {
    // aqui navegar a la home page
    this.router.navigate(['home']);
  }
}
export class InputErrorsExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
