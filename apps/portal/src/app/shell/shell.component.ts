import { Component, OnInit } from '@angular/core';

import { UtilsService } from "../shared/utils";

@Component({
  selector: 'sht-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  recentSermon: any = {
    title: 'La delivrance de Dieu dans un temps périlleux',
    preacher: 'Pasteur Richard Diyoka',
    date: 'Dimanche, 30-09-2018M',
    location: 'BibleWay Cloverdale - Vancouver, CA',
    // src: 'http://static.videogular.com/assets/videos/videogular.mp4'
    src: 'https://player.vimeo.com/video/293221804?color=f1f6f7&title=0&byline=0&portrait=0',
    srcHtml: '<iframe src="https://player.vimeo.com/video/293221804?color=f1f6f7&title=0&byline=0&portrait=0" width="633" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  };

  videoUrl: any;

  myInterval: number = 3000;

  slides: any = [
    { title: 'Faith', description: 'God on Mountan is also God in the valley', src: '../../assets/images/slide1.jpg'},
    { title: 'Praise', description: 'I praise you in the storm and I lift my hands', src: '../../assets/images/slide2.jpg'},
    { title: 'Evening Time', description: 'The message of the hour', src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg'}
  ];
  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.videoUrl = this.utils.safeVideoUrl(this.recentSermon.src);
  }

  
}
