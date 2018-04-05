import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";

import { AppComponent } from './app.component';
import { PostCardComponent } from './post-card/post-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule, FormsModule, BarRatingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
