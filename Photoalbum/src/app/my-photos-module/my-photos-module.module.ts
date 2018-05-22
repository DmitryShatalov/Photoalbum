import { DeleteCardPopupComponent } from './../shared-module/popups/delete-card-popup/delete-card-popup.component';
import { CommentsService } from './../comments/comments.service';
import { SharedModule } from './../shared-module/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from './../app-routing-module/app-routing.module'

import { MyphotosComponent } from './myphotos/myphotos.component';
import { MypostcardComponent } from './myphotos/mypostcard.component';
import {AddCardPopupComponent} from '../shared-module/popups/add-card-popup/add-card-popup.component';
import {EditCardPopupComponent} from '../shared-module/popups/edit-card-popup/edit-card-popup.component';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  imports: [
    CommonModule,SharedModule, CommentsModule
  ],
  declarations: [MyphotosComponent, MypostcardComponent],
  entryComponents: [AddCardPopupComponent, EditCardPopupComponent, DeleteCardPopupComponent ],
  exports:[ MyphotosComponent, MypostcardComponent]
})
export class MyPhotosModule { }
