import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialTeachersModuleModule } from '@app/shared/materials/material-teachers.module';

@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule,
    MaterialTeachersModuleModule
  ]
})
export class TeachersModule { }
