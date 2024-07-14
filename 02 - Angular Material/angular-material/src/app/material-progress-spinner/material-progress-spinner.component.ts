import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, take, tap, takeWhile, takeUntil } from 'rxjs';

@Component({
  selector: 'app-material-progress-spinner',
  templateUrl: './material-progress-spinner.component.html',
  styleUrls: ['./material-progress-spinner.component.scss']
})
export class MaterialProgressSpinnerComponent implements OnInit {
  public loadingPercent = 0;
  public queryValue = 0;
  public queryMode:ProgressBarMode = 'query';
  public currentPlayback = 0;

  constructor() {}

  ngOnInit(): void {
    this.loadingProgress(500, 100)
      .subscribe(i => this.loadingPercent = i);

      this.loadingProgress(350, 100)
      .subscribe(i => this.currentPlayback = i);

    concat(
      interval(3000)
      .pipe(
        take(1),
        tap(_ => (this.queryMode = 'determinate'))
      ),
      this.loadingProgress(500, 100)
    ).subscribe(i => this.queryValue = i);
  }

  loadingProgress(speed: number, takeUntil: number){
    return interval(speed).pipe(
      map(i => i * 5),
      takeWhile(i => i <= takeUntil)
    )
  }
}
