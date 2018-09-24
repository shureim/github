import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  link ="https://api.github.com/repositories?q=";
  key ="?access_token=2884de21cebef1f12fa9ede808972579182c08ac";
  return =[];

  constructor(private http:Http) {
    this.http=http;
   }

   doRepository(repository:HTMLInputElement) {
     let fullLink = this.link + repository.value + this.key
     console.log(fullLink);

     this.http.request(fullLink).subscribe(Response=>{
       this.return=Response.json()
       console.log(this.return);
       
     })

     
   }

  ngOnInit() {
  }

}
