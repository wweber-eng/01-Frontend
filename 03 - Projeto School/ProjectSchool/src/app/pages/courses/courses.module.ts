import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialCoursesModuleModule } from '@app/shared/materials/material-courses.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
    MaterialCoursesModuleModule
  ]
})
export class CoursesModule { }
