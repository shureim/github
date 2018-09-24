import { Component, OnInit } from '@angular/core';
import {ProfileServiceService} from '../service/profile-service.service'

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  profile:any[];

  constructor( private profileserviceservice:ProfileServiceService)  {
    
    this.profileserviceservice.doSearch().subscribe(profile=>{
      console.log(profile);
      this.profile=profile;
    })
   
   }

  ngOnInit() {
  
  }

}
