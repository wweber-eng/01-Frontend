import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialButtonsComponent } from './material-buttons/material-buttons.component';
import { MaterialFormFieldsInputComponent } from './material-form-fields-input/material-form-fields-input.component';


const routes: Routes = [
  {  path: 'ButtonsIcons', component: MaterialButtonsComponent  },
  {  path: 'FormFieldInput', component: MaterialFormFieldsInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
