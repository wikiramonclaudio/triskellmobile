import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainTitleService {

  title: String = 'Triskell';
  subtitle: String = '';
  navType: any = '';
  constructor() { }

  setTitle(title: string) {
    this.title = title;
  }

  getTitle(title: string) {
    return this.title;
  }

  setSubTitle(title: string) {
    this.subtitle = title;
  }

  getSubTitle(title: string) {
    return this.subtitle;
  }

  getNavType() {
    return this.navType;
  }

  setNavType(type: string) {
    this.navType = type;
  }
}
