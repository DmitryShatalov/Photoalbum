import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './allphotos/post-card/post-card.component';
import { AllphotosComponent } from './allphotos/allphotos.component';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import {AppRoutingModuleModule} from './../app-routing-module/app-routing-module.module'

@NgModule({
  imports: [
    CommonModule, SharedModuleModule
  ],
  declarations: [
    PostCardComponent,
    AllphotosComponent],
  exports: [
    PostCardComponent,
    AllphotosComponent]
})
export class AllPhotosModuleModule { }
