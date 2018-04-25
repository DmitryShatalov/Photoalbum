import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
    imports: [
      CommonModule, MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule, MatMenuModule, 
      MatInputModule, MatDialogModule,
    ],
    exports:[MatToolbarModule, MatCardModule, MatButtonModule, MatGridListModule, MatMenuModule, 
      MatInputModule, MatDialogModule]
  })
  export class MaterialFrameworkModule { }
  