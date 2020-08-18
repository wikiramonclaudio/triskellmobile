import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICES } from '@src/app/config/config';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    public _http: HttpClient,
    public router: Router
  ) { }

  getComments(): Observable<any>{
    let url = URL_SERVICES + '/comments';
    return this._http.get(url);
  }

}
