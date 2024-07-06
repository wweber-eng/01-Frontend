import { Component, OnInit } from '@angular/core';
import { interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-material-progress-spinner',
  templateUrl: './material-progress-spinner.component.html',
  styleUrls: ['./material-progress-spinner.component.scss']
})
export class MaterialProgressSpinnerComponent {
  public loadingPercent = 50;

  constructor() {}

  ngOnInit(): void {
    this.loadingProgress(500)
      .subscribe(arg => this.loadingPercent = arg);

  }

  loadingProgress(speed: number){
    return interval(speed).pipe(
      map(i => i * 5),
      takeWhile(i => i <= 100)
    )
  }
}

