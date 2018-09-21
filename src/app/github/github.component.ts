import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  users:any;

  constructor(private http:Http) { }


  ngOnInit() {

  
    this.http.get("https://api.github.com/users/shureim?access_token=2884de21cebef1f12fa9ede808972579182c08ac").subscribe(Response=>{
    this.users=Response.json().data;
    console.log(this.users)
    })
  }

}
