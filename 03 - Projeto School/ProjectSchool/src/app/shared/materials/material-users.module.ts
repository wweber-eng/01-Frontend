import { NgModule } from '@angular/core';

import { MatTabsModule }   from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
SharedModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  declarations: [],
  providers: []
})
export class MaterialUsersModuleModule { }
