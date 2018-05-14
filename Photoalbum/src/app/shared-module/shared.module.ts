import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";
import {AppRoutingModule} from './../app-routing-module/app-routing.module';

import { MaterialFrameworkModule } from './material-framework.module';
import {NavigationComponent} from "./navigation/navigation.component"
import {AddCardPopupComponent} from './popups/add-card-popup/add-card-popup.component'
import {EditCardPopupComponent} from './popups/edit-card-popup/edit-card-popup.component'
import { SignUpComponent } from './../users-module/sign-up/sign-up.component';
import { SignInComponent } from './../users-module/sign-in/sign-in.component';
import { ChangeUserComponent } from './../users-module/change-user/change-user.component';
import { AuthGuard } from './services/auth.guard.service';
import { CommentsService } from '../comments/comments.service';
import { RatingsComponent } from '../ratings/ratings.component';
import { RatingsService } from '../ratings/ratings.service';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  /*  imports: [
    CommonModule,ReactiveFormsModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule, FormsModule, BarRatingModule, MatMenuModule, 
    MatInputModule, MatDialogModule, AppRoutingModule
  ], */
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    BarRatingModule,
    MaterialFrameworkModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [AuthGuard, CommentsService, RatingsService],
  entryComponents: [ChangeUserComponent],
  declarations: [
    EditCardPopupComponent,
    AddCardPopupComponent,
    NavigationComponent, 
    RatingsComponent
  ],
  exports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    BarRatingModule,
    EditCardPopupComponent,
    AddCardPopupComponent,
    NavigationComponent,
    MaterialFrameworkModule,
    RatingsComponent,
    FlexLayoutModule
  ]
})
export class SharedModule {}
