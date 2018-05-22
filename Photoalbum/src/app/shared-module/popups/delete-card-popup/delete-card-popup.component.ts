import { PostsDataService } from "./../../services/posts-data.service";
import { Component, OnInit, Inject, Output } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { EventEmitter } from "events";

@Component({
  selector: "app-delete-card-popup",
  templateUrl: "./delete-card-popup.component.html",
  styleUrls: ["./delete-card-popup.component.css"]
})
export class DeleteCardPopupComponent implements OnInit {
  @Output() delete = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<DeleteCardPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private postDataService: PostsDataService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  onDelete() {
    this.dialogRef.close({
      delete: true
    });
  }
}
