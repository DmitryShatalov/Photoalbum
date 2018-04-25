import { AuthService } from './shared-module/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing-module/app-routing.module'
import { AppComponent } from './app.component';
import {PostsDataService} from './shared-module/services/posts-data.service';
import { AllPhotosModule} from './all-photos-module/all-photos.module';
import { MyPhotosModule} from './my-photos-module/my-photos-module.module';
import{ UsersModule} from './users-module/users.module';
import { SharedModule } from './shared-module/shared.module';
import { UsersService } from './shared-module/services/users.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AllPhotosModule, MyPhotosModule, AppRoutingModule, HttpClientModule, UsersModule, SharedModule
  ],
  providers: [PostsDataService, UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
