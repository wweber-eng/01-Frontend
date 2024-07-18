import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialStudentsModuleModule } from '@app/shared/materials/material-students.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    MaterialStudentsModuleModule
  ]
})
export class StudentsModule { }
