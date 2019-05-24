import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime
} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor() {}
  menuTitleVisible = false;
  menus: any = [];
  menuOpen = false;

  isDesktop = true;
  ngAfterViewInit(): void {
    const header = document.getElementById('myHeader');
    // var topHeader = document.getElementById("top-header");
    const navbarMenu = document.getElementById('navbar-menu');
    this.onScrollMainMenu(header, navbarMenu);
    // this.onScrollTopMenu(topHeader);
  }

  buildMenu() {
    this.menus = [
      {
        name: 'Accueil',
        id: '',
        link: '',
        linkClass: 'nav-link',
        class: 'nav-item mr-3 active',
        isDefault: true
      },
      {
        name: 'Notre Assemblee',
        id: '1',
        link: '',
        linkClass: 'nav-link dropdown-toggle',
        class: 'nav-item mr-3 navlink-more dropdown',
        items: [
          {
            name: 'Shekinah Tabernacle',
            id: '',
            link: '',
            linkClass: '',
            class: ''
          },
          { name: 'Le Pasteur', id: '', link: '', linkClass: '', class: '' },
          { name: 'Ministres', id: '', link: '', linkClass: '', class: '' },
          { isDivider: true }
        ]
      },
      {
        name: 'William Branham',
        id: 'button-basic2',
        link: '',
        linkClass: 'nav-link dropdown-toggle',
        class: 'nav-item mr-3 navlink-more dropdown',
        items: [
          { name: 'Le Prophete', id: '', link: '', linkClass: '', class: '' },
          {
            name: 'Le tour du monde',
            id: '',
            link: '',
            linkClass: '',
            class: ''
          },
          { name: 'Archives', id: '', link: '', linkClass: '', class: '' }
        ]
      },
      {
        name: 'Services',
        id: 'button-basic3',
        link: '',
        linkClass: 'nav-link dropdown-toggle',
        class: 'nav-item mr-3 navlink-more dropdown',
        items: [
          {
            name: 'Le Direct / Live streaming',
            id: '',
            link: '',
            linkClass: '',
            class: ''
          },
          {
            name: 'Predications Archives',
            id: '',
            link: '',
            linkClass: '',
            class: ''
          }
        ]
      },
      {
        name: 'Multimedia',
        id: 'button-basic4',
        link: '',
        linkClass: 'nav-link dropdown-toggle',
        class: 'nav-item mr-3 navlink-more dropdown',
        items: [
          { name: 'Message audio', id: '', link: '', linkClass: '', class: '' },
          {
            name: 'La Bible audio',
            id: '',
            link: '',
            linkClass: '',
            class: ''
          },
          { name: 'Musique', id: '', link: '', linkClass: '', class: '' },
          {
            name: 'Gallery Photos',
            id: '',
            link: '',
            linkClass: '',
            class: ''
          },
          {
            name: 'Video / Documentaires',
            id: '',
            link: '',
            linkClass: '',
            class: ''
          },
          { name: 'Divers', id: '', link: '', linkClass: '', class: '' }
        ]
      },
      {
        name: 'Contactez-nous',
        id: '',
        link: '',
        linkClass: '',
        class: 'nav-item mr-3'
      },
      {
        name: 'Faire un Don',
        id: '',
        link: '',
        linkClass: '',
        class: 'nav-item mr-3',
        isButton: true
      }
    ];
  }

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
  private onScrollMainMenu(header: HTMLElement, navbarMenu: HTMLElement) {
    const sticky = header.offsetTop;
    header.classList.add('animated');
    header.classList.add('navbar-hd-left');
    navbarMenu.classList.add('m-auto');
    const scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
        header.classList.add('sticky-left');
        header.classList.remove('navbar-hd-left');
        navbarMenu.classList.add('z-depth-4');
        navbarMenu.classList.add('fadeInUp');
        navbarMenu.classList.add('m-auto');
        this.menuTitleVisible = true;
      } else {
        header.classList.remove('sticky');
        header.classList.remove('sticky-left');
        header.classList.add('navbar-hd-left');
        // navbarMenu.classList.remove('ml-auto');
        // navbarMenu.classList.add('m-auto');
        navbarMenu.classList.remove('z-depth-4');
        this.menuTitleVisible = false;
      }
    });
  }

  ngOnInit() {
    if (window.innerWidth < 930) {
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }

  toggleMenue() {
    this.menuOpen = !this.menuOpen;
    this.onMenuShow();
  }

  private onMenuShow() {
    const menu = document.getElementById('navbarResponsive');

    if (this.menuOpen) {
      menu.classList.add('show');
      menu.classList.add('menuToggle1');
    } else {
      menu.classList.remove('show');
      menu.classList.remove('menuToggle1');
    }
  }
}
