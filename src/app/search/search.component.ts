// import { Component, OnInit } from '@angular/core';
// import {Http, Response } from '@angular/http';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {
//   link ="https://api.github.com/users/";
//   key="?access_token=2884de21cebef1f12fa9ede808972579182c08ac";
//   runs=[];

//   constructor(private http:Http) {

//     this.http=http;
//    }

//   doSearch(search: HTMLInputElement): void {
//     // console.log(`User entered: ${search.value}`);
    
//    let fullLink= this.link + search.value + this.key;
//    console.log(fullLink);

//    this.http.request(fullLink).subscribe(Response=>{
//      this.runs=Response.json();
//      console.log(this.runs);
     
//    })
//   }
//   ngOnInit() {
//   }

// }
