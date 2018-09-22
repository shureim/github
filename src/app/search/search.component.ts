// import { Component, OnInit } from '@angular/core';
// import {Http, Response } from '@angular/http';
// import { Github } from '../github';
// import { UserService } from '../user/user.service';
// import {HttpClient} from '@angular/common/http';




// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {

//   github:Github;

//   // link ="https://api.github.com/users/";
//   // key="?access_token=2884de21cebef1f12fa9ede808972579182c08ac";
//   // runs=[];

//   constructor(private http:HttpClient, private userService: UserService) {
//     this.userService=userService;
//    }

//   // doSearch(search: HTMLInputElement): void {
//   //   // console.log(`User entered: ${search.value}`);
    
//   //  let fullLink= this.link + search.value + this.key;
//   //  console.log(fullLink);

//   //  this.http.request(fullLink).subscribe(Response=>{
//   //    this.runs=Response.json();
//   //    console.log(this.runs);
     
//   //  })
//   // }
//   ngOnInit() {
//     this.userService.doSearch(this.github);
//     this.github= this.userService.github;

//     console.log(this.github);
    
    
//   }

// }
