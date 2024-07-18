import { NgModule } from '@angular/core';

import { MatSliderModule }   from '@angular/material/slider';
import { MatIconModule }     from '@angular/material/icon';
import { MatButtonModule }   from '@angular/material/button';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  imports: [

  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [],
  providers: []
})
export class MaterialModuleModule { }
