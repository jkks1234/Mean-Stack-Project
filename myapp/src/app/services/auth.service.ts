import { Injectable } from '@angular/core'
import {Http , Headers , Response} from '@angular/http';
//import 'rxjs/add/observable/throw';
//import {Observable} from 'rxjs/Rx';
import {tokenNotExpired} from 'angular2-jwt';
// Operators
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';
import {article} from '../components/listall/model';
import {article1} from '../components/listone/model';

@Injectable()
export class AuthService {
		user:any;
    Post:any;
    authToken: any;
  constructor(private http:Http) { }

  getData():Observable<article[]> {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.get('http://localhost:2217/api/showall',{headers:headers})
            .map(res => res.json())
            
    }
    getData2():Observable<article[]> {
      let headers = new Headers(); 
      this.loadToken();
      const modToken = this.authToken;
      console.log('token=');
      console.log(modToken);
      headers.append('Authorization',modToken);
        headers.append('Content-Type','application/json');
        return this.http.get('http://localhost:2217/api/showone',{headers:headers})
            .map(res => res.json())
            
    }
    getData1(id:string):Observable<article1> {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.get('http://localhost:2217/api/listone/'+id,{headers:headers})
            .map(res => res.json())
            
    }
  addUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');
  	return this.http.post('http://localhost:2217/api/addone',user,{headers:headers}).map(res => res.json());
  }
  delete(id:string){
    let headers = new Headers(); 
      this.loadToken();
      const modToken = this.authToken;
      console.log('token=');
      console.log(modToken);
      headers.append('Authorization',modToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:2217/api/delete/'+id,{headers:headers}).map(res => res.json());
  }
  authenticateUser(user){
    let headers = new Headers(); 
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:2217/api/login',user , {headers: headers}).map(res => res.json());
  }
  addarticle(article)
  {
    let headers = new Headers(); 
    this.loadToken();
    const modToken = this.authToken;
    console.log('token=');
    console.log(modToken);
    headers.append('Authorization',modToken);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:2217/api/addarticle',article , {headers: headers}).map(res => res.json());
  }
  storeUserData(token , user){
    localStorage.setItem('id_token'  , token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  
  loadToken(){
    const token = localStorage.getItem('id_token');
    console.log(token);
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
