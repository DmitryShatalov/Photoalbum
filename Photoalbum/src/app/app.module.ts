import { AuthService } from './shared-module/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {AppRoutingModuleModule} from './app-routing-module/app-routing-module.module'
import { AppComponent } from './app.component';
import {PostsDataService} from './shared-module/services/posts-data.service';
import { AllPhotosModuleModule } from './all-photos-module/all-photos-module.module';
import { MyPhotosModuleModule} from './my-photos-module/my-photos-module.module';
import{ UsersModuleModule} from './users-module/users-module.module';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { UsersService } from './shared-module/services/users.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AllPhotosModuleModule, MyPhotosModuleModule, AppRoutingModuleModule, HttpClientModule, UsersModuleModule, SharedModuleModule
  ],
  providers: [PostsDataService, UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
