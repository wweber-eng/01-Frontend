import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialDialogComponent } from '../material-dialog.component';

@Component({
  selector: 'app-material-dialog-message',
  templateUrl: './material-dialog-message.component.html',
  styleUrls: ['./material-dialog-message.component.scss']
})
export class MaterialDialogMessageComponent {

  constructor(public dialogRef: MatDialogRef<MaterialDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {data: string}
  ){}

  ngOnInit(): void {

  }


  closeDialog(){
    this.dialogRef.close('Returned Bazinga!');
  }

}
