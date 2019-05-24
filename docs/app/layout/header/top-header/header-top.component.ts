import { Component, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements AfterViewInit {
  navbarOpen = false;
  ngAfterViewInit(): void {
    const topHeader = document.getElementById('top-header');
    this.onScrollTopMenu(topHeader);
  }

  constructor() {}

  private onScrollTopMenu(header: HTMLElement) {
    const sticky = header.offsetTop;
    header.classList.add('fixed-top');
    const scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      if (window.pageYOffset > sticky) {
        header.classList.remove('fixed-top');
      } else {
        header.classList.add('fixed-top');
      }
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.onMenuShow();
  }

  private onMenuShow() {
    const menu = document.getElementById('menuToggle1');

    if (this.navbarOpen) {
      menu.classList.add('show');
      menu.classList.add('navbar-collapse-top');
    } else {
      menu.classList.remove('show');
      menu.classList.remove('navbar-collapse-top');
    }
  }
}
