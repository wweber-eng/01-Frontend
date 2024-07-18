import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialSupportModuleModule } from '@app/shared/materials/material-support.module';


@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    SharedModule,
    MaterialSupportModuleModule
  ]
})
export class SupportModule { }
