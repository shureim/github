import { Component, OnInit } from '@angular/core';
import {ProfileServiceService} from '../service/profile-service.service'

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  profile:any[];
  repos:any[];
  username:string;

  constructor( private profileserviceservice:ProfileServiceService)  {



   }

   findProfile(){
     this.profileserviceservice.updateProfile(this.username)
     this.profileserviceservice.getdoSearch().subscribe(profile=>{
       console.log(profile);
       this.profile=profile;
     })

     this.profileserviceservice.getrepos().subscribe(repos=>{
       console.log(repos);
       this.repos=repos;
     })
   }

  ngOnInit() {

  }

}
