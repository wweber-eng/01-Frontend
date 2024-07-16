import { NgModule } from '@angular/core';

import { MatIconModule }     from '@angular/material/icon';
import { MatButtonModule }   from '@angular/material/button';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './../shared.module';


@NgModule({
  imports: [

  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    SharedModule

  ],
  declarations: [],
  providers: []
})
export class MaterialModuleModule { }
