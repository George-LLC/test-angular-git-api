import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  message: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

  ngOnInit(): void {
    if (this.data === 'star') {
      this.message = 'Do you want to add this repository to your list of starred repositories?'
    }
    else {
      this.message = 'Do you want to delete this repository from your list of starred repositories?'
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
