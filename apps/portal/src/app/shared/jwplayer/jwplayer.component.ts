import { Component, OnInit } from '@angular/core';
declare var jwplayer: any;

@Component({
  selector: 'sht-jwplayer',
  templateUrl: './jwplayer.component.html',
  styleUrls: ['./jwplayer.component.scss']
})
export class JwplayerComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
  }

  play(){
    this.launchStreaming();
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
