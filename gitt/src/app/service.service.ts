import { Injectable } from '@angular/core';

import{ Http} from  '@angular/http'; 
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import {Iname } from './namforms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 name;
  data;
  url="https://api.github.com/users/";
  //url="https://github.com/users/octocat";
constructor(private http: Http)
{}

getDetails()
{
 this.http.get(this.url + this.name).map((resp)=>resp.json()).subscribe((data)=>
 this.data = data);
//console.log(this.data);
return this.data;

//return this.http.get<Iname>(this.url+ this.name);
}
updateUser(username: string){
  this.name = username;

}
}
