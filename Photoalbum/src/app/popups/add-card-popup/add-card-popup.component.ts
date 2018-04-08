import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-card-popup',
  templateUrl: './add-card-popup.component.html',
  styleUrls: ['./add-card-popup.component.css']
})
export class AddCardPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCardPopupComponent>){}

  ngOnInit() {
  }

}
