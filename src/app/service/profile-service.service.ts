import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import {map} from 'rxjs/operators'
//  import'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

   username :string;
   clientid :"1ad44ae927ecd3adf2b0";
   clientsecret :"1f56d503ee33560b5ce69500fd6161ee7c0f9639"

  constructor(private http:Http) { 
    console.log('enter the console log');
    this.username = "shureim";
  }

  doSearch(){
   return this.http.get("https://api.github.com/users/" +this.username + "?client_id=" + this.clientid 
    + "&client_secret=" + this.clientsecret).pipe(map(res=>res.json()));
  }
}
