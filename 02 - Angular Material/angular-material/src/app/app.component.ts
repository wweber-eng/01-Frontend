import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private breakpointObserver: BreakpointObserver){}

    public isSmallScreen = false;

    ngAfterContentInit(): void {
      this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => this.isSmallScreen = res.matches)
    }


    get SidenavMode(){
      return this.isSmallScreen ? 'over' : 'side';
    }
}
