import { Injectable } from '@angular/core'
import {Http , Headers , Response} from '@angular/http';
//import 'rxjs/add/observable/throw';
//import {Observable} from 'rxjs/Rx';

// Operators
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {
		user:any;
  constructor(private http:Http) { }

  addUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('http://localhost:5199/api/addone',user,{headers:headers}).map(res => res.json());
  }
}
