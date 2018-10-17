import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderTopComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    var topHeader = document.getElementById("top-header");
    this.onScrollTopMenu(topHeader);
  }

  constructor() { }

  private onScrollTopMenu(header: HTMLElement) {
    var sticky = header.offsetTop;
    header.classList.add("fixed-top");
    const scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      if (window.pageYOffset > sticky) {
        header.classList.remove("fixed-top");
      }
      else {
        header.classList.add("fixed-top");
      }
    });
  }

}
