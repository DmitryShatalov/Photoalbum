import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { BarRatingModule } from "ngx-bar-rating";
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PostCardComponent } from './allphotos/post-card/post-card.component';
import { AllphotosComponent } from './allphotos/allphotos.component';
import { MyphotosComponent } from './myphotos/myphotos.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MypostcardComponent } from './myphotos/mypostcard/mypostcard.component';
import { AddCardPopupComponent } from './popups/add-card-popup/add-card-popup.component';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {PostsDataService} from './posts-data.service';
import { EditCardPopupComponent } from './popups/edit-card-popup/edit-card-popup.component';
const appRoutes: Routes =[
  { path: '', component: AllphotosComponent},
  { path: 'myphotos', component: MyphotosComponent},
  { path: '**', redirectTo: '/'}
];
@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    AllphotosComponent,
    MyphotosComponent,
    NavigationComponent,
    MypostcardComponent,
    AddCardPopupComponent,
    EditCardPopupComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule, FormsModule, BarRatingModule, MatMenuModule, 
    RouterModule.forRoot(appRoutes), MatInputModule, MatDialogModule
  ],
  entryComponents: [AddCardPopupComponent, EditCardPopupComponent ],
  providers: [PostsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
