import { Component, OnInit } from '@angular/core';
import { MaterialDialogMessageComponent } from './material-dialog-message/material-dialog-message.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})
export class MaterialDialogComponent implements OnInit {

  public message = "";

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {

  }

  public  openDialog()
  {
      const dialogRef = this.dialog.open(MaterialDialogMessageComponent,{
      data: 'Bazinga',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms'
      });

      dialogRef.afterClosed().subscribe(result => {
        this.message = result !== undefined ? result : '';
      })
    }
}
