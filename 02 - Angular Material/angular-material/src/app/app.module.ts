import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material/material-module/material-module.module';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialFormFieldsInputComponent } from './material-form-fields-input/material-form-fields-input.component';
import { MaterialProgressSpinnerComponent } from './material-progress-spinner/material-progress-spinner.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { MaterialDatapickerComponent } from './material-datapicker/material-datapicker.component';
import { MaterialSnackbarComponent } from './material-snackbar/material-snackbar.component';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import { MaterialSnackbarMessageComponent } from './material-snackbar/material-snackbar-message/material-snackbar-message.component';
import { MaterialDialogMessageComponent } from './material-dialog/material-dialog-message/material-dialog-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialButtonsComponent,
    MaterialFormFieldsInputComponent,
    MaterialProgressSpinnerComponent,
    MaterialTabsComponent,
    MaterialDatapickerComponent,
    MaterialSnackbarComponent,
    MaterialDialogComponent,
    MaterialSnackbarMessageComponent,
    MaterialDialogMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  exports: [
    MaterialModuleModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
