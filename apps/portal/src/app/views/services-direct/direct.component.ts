import { Component, OnInit } from '@angular/core';

declare var jwplayer: any;

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html'
})
export class DirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  launchStreaming(){

    const playerJw = jwplayer('player').setup({
      title: 'Player Test',
      playlist: 'https://cdn.jwplayer.com/v2/media/8L4m9FJB',
      width: 640,
      height: 360,
      aspectratio: '16:9',
      mute: false,
      autostart: true,
      primary: 'html5',
    });

  }
}
