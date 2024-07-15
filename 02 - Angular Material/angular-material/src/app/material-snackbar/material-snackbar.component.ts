import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialSnackbarMessageComponent } from './material-snackbar-message/material-snackbar-message.component';


@Component({
  selector: 'app-material-snackbar',
  templateUrl: './material-snackbar.component.html',
  styleUrls: ['./material-snackbar.component.scss']
})
export class MaterialSnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar){}

  ngOnInit(): void {


  }

  public openSnackBar(){
    const snackBar = this.snackbar.open("hellow People", 'close', {
      duration: 2000
    })

    snackBar.afterDismissed().subscribe(_ => {
      console.log('Dismissed');
    })

    snackBar.afterDismissed().subscribe(_ => {
      console.log('after Action');
    })
  }

    public openFromComponent(){
        this.snackbar.openFromComponent(MaterialSnackbarMessageComponent, {
        data: 'Hellow People',
        duration:25000,
        horizontalPosition: 'end',
        verticalPosition: 'top'
      })

    }
  }

