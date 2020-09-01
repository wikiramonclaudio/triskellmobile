import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './../../services/translation.service';

import { FormControl, Validators } from '@angular/forms';
declare var $;
declare var TkLogin;
import { LayoutModule } from '@angular/cdk/layout';
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
    // add class to login's html tag
    // var htmlTag = document.querySelector('html');
    // htmlTag.classList.add('loginPage');
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

// $(function () {

//   var Direct = new $.ExtDirect;
//   const loginURL = 'http://localhost/triskell/service/edsprovider/router';
//   /*
//    /url/path/to/direct/api - standart ext.direct provider
//    {
//       "id":"...", "url":"/url/path/to/direct/api", "type":"remoting",
//       "namespace":"MyNamespace.Mew", "descriptor":"My API",
//       "actions":{"Test":[{"name":"split","len":2}]}
//     }
//    */
//   var config = {
//     'id': 'login',
//     'url': loginURL,
//     'type': 'remoting',
//     'namespace': 'Ext.tk',
//     'descriptor': 'My API',
//     'actions': { 'TkLogin': [{ 'login': 'split', 'len': 2 }] }
//   };
//   const TkSpace = {
//     url: loginURL,
//     type: 'remoting',
//     actions: {
//       TkLogin: [
//         { name: 'login', len: 3, formHandler: false },
//         { name: 'logout', len: 0, formHandler: false }],
//       TkCrudServiceProxy: [
//         { name: 'create', len: 2, formHandler: false },
//         { name: 'read', len: 2, formHandler: false },
//         { name: 'update', len: 2, formHandler: false },
//         { name: 'destroy', len: 2, formHandler: false }],
//       TkOperationServiceProxy: [
//         { name: 'execute', len: 2, formHandler: false }],
//       TkOperationServiceProxyForm: [
//         { name: 'executeForm', len: 1, formHandler: true },
//         { name: 'executeFormUpload', len: 1, formHandler: true }]
//     }
//   };
//   $.get(loginURL, function (provider) {
//     Direct.addProvider(provider);
//   }, 'json');

//   const urlParams = new URLSearchParams(window.location.search);
//   TkLogin.login('admin@test.com', 'triskell', urlParams.get('utr'), function(result, e) {
//     console.log('LOGIN', result);
//   });
// });
