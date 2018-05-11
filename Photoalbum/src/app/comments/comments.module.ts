import { CommentsListComponent } from './comments-list/comments-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { SharedModule } from '../shared-module/shared.module';
import { CommentsWrapperComponent } from './comments-wrapper/comments-wrapper.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [NewCommentComponent, CommentsListComponent, CommentsWrapperComponent, EditCommentComponent],
  exports: [CommentsWrapperComponent]
})
export class CommentsModule { }
