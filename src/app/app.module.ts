import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
// import { SearchComponent } from './search/search.component';
// import { RepositoryComponent } from './repository/repository.component';
// import { UserService } from './user/user.service';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    // SearchComponent,
    // RepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  // providers: [UserService],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
