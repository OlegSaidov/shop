import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>

  ngAfterViewInit () {
    this.appTitle.nativeElement.textContent = 'Shop'
  }
}
