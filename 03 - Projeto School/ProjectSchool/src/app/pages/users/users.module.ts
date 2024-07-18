
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialUsersModuleModule } from '@app/shared/materials/material-users.module';

import { UsersComponent } from './users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyConquestsComponent } from './my-conquests/my-conquests.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    MyProfileComponent,
    MyConquestsComponent,
    MyDisciplinesComponent
  ],
  imports: [
  CommonModule,
    UsersRoutingModule,
    MaterialUsersModuleModule,
    SharedModule
  ]
})
export class UsersModule { }
