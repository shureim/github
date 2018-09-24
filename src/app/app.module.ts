import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
// import { GithubComponent } from './github/github.component';
// import { SearchComponent } from './search/search.component';
import { RepositoryComponent } from './repository/repository.component';
import{ ProfileServiceService } from './service/profile-service.service'
import {HttpClientModule} from '@angular/common/http';
import { UsernameComponent } from './username/username.component';


@NgModule({
  declarations: [
    AppComponent,
    // GithubComponent,
    // SearchComponent,
    RepositoryComponent,
    UsernameComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule

  ],
 
  providers:[ProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
