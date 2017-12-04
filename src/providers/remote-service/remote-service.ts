import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Http ,Response ,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  




   getPosts(apiUrl: string) : Observable<any>{
    return this.http.get(apiUrl)
       .do(res => console.log(res.json))
       .map(res => res.json())
       .catch((error) => this.handleError(error));; 
}


getPosts2(apiUrl: string,body : any) : Observable<any>{
 
  let headers = new Headers();
headers.append('Accept','application/json')
  headers.append('Access-Control-Allow-Origin' , '*');
  headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  headers.append('Content-Type','application/json' );
  let options = new RequestOptions({ headers: headers });
//  return this.http.post(this.url, book, options)
  return this.http.post(apiUrl,body ,options)
     .do(res => console.log(res.json))
     .map(res => res.json())
     .catch((error) => this.handleError(error));; 
}

private handleError (error: any) {
  // Could dig deeper into the error to get a better message or use a remote logging infrastructure
  let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}

}