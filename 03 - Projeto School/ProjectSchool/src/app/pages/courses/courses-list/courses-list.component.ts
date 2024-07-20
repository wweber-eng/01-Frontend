import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  templateUrl: './courses-list.component.html',
  styleUrls: [ './courses-list.component.scss' ]
})
export class CoursesListComponent implements OnInit {
  public courseList: Course[] = [];
  private courseService = inject(CoursesService);
  private fb = inject(FormBuilder);
  public categoryValue = Object.values(Category);

  form!: FormGroup;

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      search: ['']
    });
  }

  ngOnInit(): void {
    this.getCourses();
    this.validation();
  }

  public getCourses(): void {
    this.courseService.get().subscribe((response: Course[]) => {
      this.courseList = response;
    })
  }

  public doSearch(): void{

  }

}
