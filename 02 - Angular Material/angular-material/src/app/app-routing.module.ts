import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialFormFieldsInputComponent } from './material-form-fields-input/material-form-fields-input.component';
import { MaterialProgressSpinnerComponent } from './material-progress-spinner/material-progress-spinner.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { MaterialDatapickerComponent } from './material-datapicker/material-datapicker.component';

const routes: Routes = [
  {  path: 'ButtonsIcons', component: MaterialButtonsComponent  },
  {  path: 'FormFieldInput', component: MaterialFormFieldsInputComponent },
  {  path: 'ProgressBarSpinner', component: MaterialProgressSpinnerComponent },
  {  path: 'datapicker', component: MaterialDatapickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
