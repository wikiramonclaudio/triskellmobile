import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainTitleService {

  title: String = 'Triskell';
  constructor() { }

  setTitle(title: string) {
    this.title = title;
  }

  getTitle(title: string) {
    return this.title;
  }
}
