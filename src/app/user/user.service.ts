import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Github } from '../github';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  github: Github;


  link ="https://api.github.com/users/";
  
  key = environment.key;
  runs=[];


  constructor(private http : HttpClient) {
    this.github = new Github("","","","","")

   }
   doSearch(search){
     interface ApiResponse{
       bio:any;
       name:any;
       location:any;
       company:any;
       login:any
     }
     let fullLink= this.link + "shureim"+ this.key;
     const promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>("https://api.github.com/users/" + search + "?access_token=2884de21cebef1f12fa9ede808972579182c08ac" + environment.key ).toPromise().then(Response=>{
         this.github =Response;
         this.github.bio=Response.bio;
         this.github.name=Response.name;
         this.github.location=Response.location;
         this.github.company=Response.company;
         this.github.login=Response.login;
         console.log(this.github);
         
         resolve()
       })
       error=>{
         this.github.bio="Try Again.";
         this.github.name="";
         this.github.location="";
         this.github.company="";
         this.github.login="";
         reject(error)
       }

     })
     return promise;
   }

}
