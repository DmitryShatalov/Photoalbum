
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { BarRatingModule } from "ngx-bar-rating";
import {AppRoutingModuleModule} from './../app-routing-module/app-routing-module.module';

import {NavigationComponent} from "./navigation/navigation.component"
import {AddCardPopupComponent} from './popups/add-card-popup/add-card-popup.component'
import {EditCardPopupComponent} from './popups/edit-card-popup/edit-card-popup.component'

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule, FormsModule, BarRatingModule, MatMenuModule, 
    MatInputModule, MatDialogModule, AppRoutingModuleModule 
  ],
  declarations: [EditCardPopupComponent, AddCardPopupComponent, NavigationComponent],
  exports:[BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule, FormsModule, BarRatingModule, MatMenuModule, 
    MatInputModule, MatDialogModule, EditCardPopupComponent, AddCardPopupComponent, NavigationComponent]
})
export class SharedModuleModule { }