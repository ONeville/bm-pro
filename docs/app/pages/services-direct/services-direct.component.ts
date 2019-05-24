import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-services-direct',
  templateUrl: './services-direct.component.html',
  styleUrls: ['./services-direct.component.scss'],
  providers: [ModalDirective]
})
export class ServicesDirectComponent implements OnInit {
  title: string;
  @ViewChild('frame') frameVideo: ModalDirective;
  constructor() { }

  ngOnInit() {
  }

  goLiveFr(){
    this.title = 'Francais';
    this.frameVideo.show();
  }

  goLiveEn(){
    this.title = 'English';
    this.frameVideo.show();
  }

  goLivePg(){
    this.title = 'Portuguese';
    this.frameVideo.show();
  }
}
