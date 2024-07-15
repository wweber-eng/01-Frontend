import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-snackbar-message',
  templateUrl: './material-snackbar-message.component.html',
  styleUrls: ['./material-snackbar-message.component.scss']
})
export class MaterialSnackbarMessageComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string,
  public matSnackBarRef: MatSnackBarRef<MaterialSnackbarMessageComponent>
) { }

ngOnInit(): void {

}

closeSnackBar(){
  this.matSnackBarRef.dismiss();
}

}
