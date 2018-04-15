import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {AppRoutingModuleModule} from './app-routing-module/app-routing-module.module'
import { AppComponent } from './app.component';
import {PostsDataService} from './posts-data.service';
import { AllPhotosModuleModule } from './all-photos-module/all-photos-module.module';
import { MyPhotosModuleModule} from './my-photos-module/my-photos-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AllPhotosModuleModule, MyPhotosModuleModule, AppRoutingModuleModule, HttpClientModule
  ],
  providers: [PostsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
