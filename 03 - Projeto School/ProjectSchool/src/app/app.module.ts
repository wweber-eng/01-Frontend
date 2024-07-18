import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './shared/materials/material-module.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { CoursesModule } from './pages/courses/courses.module';
import { TeachersModule } from './pages/teachers/teachers.module';
import { StudentsModule } from './pages/students/students.module';
import { SupportModule } from './pages/support/support.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    DashboardModule,
    CoursesModule,
    TeachersModule,
    StudentsModule,
    SupportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
