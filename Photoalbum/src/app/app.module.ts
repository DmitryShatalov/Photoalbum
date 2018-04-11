import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatCardModule} from '@angular/material/card'
// import {MatButtonModule} from '@angular/material/button'
// import {MatGridListModule} from '@angular/material/grid-list';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatMenuModule} from '@angular/material/menu';
// import { BarRatingModule } from "ngx-bar-rating";
//import {Routes, RouterModule} from '@angular/router';
import {AppRoutingModuleModule} from './app-routing-module/app-routing-module.module'

import { AppComponent } from './app.component';
// import { PostCardComponent } from './allphotos/post-card/post-card.component';
// import { AllphotosComponent } from './allphotos/allphotos.component';
//import { MyphotosComponent } from './myphotos/myphotos.component';
//import { NavigationComponent } from './navigation/navigation.component';
//import { MypostcardComponent } from './myphotos/mypostcard/mypostcard.component';
//import { AddCardPopupComponent } from './popups/add-card-popup/add-card-popup.component';
//import {MatInputModule} from '@angular/material/input';
//import {MatDialogModule} from '@angular/material/dialog';
import {PostsDataService} from './posts-data.service';
//import { EditCardPopupComponent } from './popups/edit-card-popup/edit-card-popup.component';
import { AllPhotosModuleModule } from './all-photos-module/all-photos-module.module';
import { MyPhotosModuleModule} from './my-photos-module/my-photos-module.module';

@NgModule({
  declarations: [
    AppComponent,
    // PostCardComponent,
    // AllphotosComponent,
   // MyphotosComponent,
    //NavigationComponent,
    //MypostcardComponent,
    //AddCardPopupComponent,
    //EditCardPopupComponent,
  ],
  imports: [
    BrowserModule, /*BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule, FormsModule, BarRatingModule, MatMenuModule, 
     MatInputModule, MatDialogModule,*/
    AllPhotosModuleModule, MyPhotosModuleModule, AppRoutingModuleModule
  ],
  //entryComponents: [AddCardPopupComponent, EditCardPopupComponent ],
  providers: [PostsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
