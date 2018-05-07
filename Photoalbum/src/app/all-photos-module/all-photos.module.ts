import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './allphotos/post-card.component';
import { AllphotosComponent } from './allphotos/allphotos.component';
import {SharedModule} from '../shared-module/shared.module';
import {AppRoutingModule} from './../app-routing-module/app-routing.module'
import { CommentsComponent } from '../comments/comments.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [
    PostCardComponent,
    AllphotosComponent,
  ],
  exports: [
    PostCardComponent,
    AllphotosComponent]
})
export class AllPhotosModule{}
