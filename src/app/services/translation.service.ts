import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public activeLang = 'en';
  private subject = new Subject<any>();
  constructor(
    private translate: TranslateService
  ) {
    const browserLang = this.translate.getBrowserLang();
    // this.translate.use(browserLang.match(/en|id/) ? browserLang : 'en');
    this.translate.setDefaultLang('en');

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.activeLang = event.lang;
      this.sendNewLanguage(event);
    });
  }

  public changeLanguage(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  public getActiveLang() {
    return this.activeLang;
  }

  getTranslateService() {
    return this.translate;
  }

  sendNewLanguage(data: any) {
    this.subject.next(data);
  }

  getLanguage(): Observable<any> {
    return this.subject.asObservable();
  }

}
