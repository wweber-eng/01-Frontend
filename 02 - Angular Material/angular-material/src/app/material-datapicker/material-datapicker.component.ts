import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';


@Component({
  selector: 'app-material-datapicker',
  templateUrl: './material-datapicker.component.html',
  styleUrls: ['./material-datapicker.component.scss']
})

export class MaterialDatapickerComponent {
  public startDate = new Date(2024, 7, 14);
  public minDate = new Date(20024, 6, 1);
  public maxDate = new Date(20024,12, 1);

  constructor(private platform: Platform){}

  ngOnInit(): void {

  }

  get IstouchDevice(){
    return this.platform.ANDROID || this.platform.IOS
  }
}
