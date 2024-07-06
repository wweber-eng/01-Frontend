import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material/material-module/material-module.module';


import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialFormFieldsInputComponent } from './material-form-fields-input/material-form-fields-input.component';
import { MaterialProgressSpinnerComponent } from './material-progress-spinner/material-progress-spinner.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
@NgModule({
  declarations: [
    AppComponent,
    MaterialButtonsComponent,
    MaterialFormFieldsInputComponent,
    MaterialProgressSpinnerComponent,
    MaterialTabsComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
