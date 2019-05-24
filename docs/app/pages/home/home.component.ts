
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentSermon: any = {
    title: 'La delivrance de Dieu dans un temps périlleux',
    preacher: 'Pasteur Richard Diyoka',
    date: 'Dimanche, 30-09-2018M',
    location: 'BibleWay Cloverdale - Vancouver, CA',
    // src: 'http://static.videogular.com/assets/videos/videogular.mp4'
    src:
      'https://player.vimeo.com/video/293221804?color=f1f6f7&title=0&byline=0&portrait=0',
    srcHtml:
      // tslint:disable-next-line:max-line-length
      '<iframe src="https://player.vimeo.com/video/293221804?color=f1f6f7&title=0&byline=0&portrait=0" width="633" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  };

  videoUrl: any;

  myInterval = 3000;

  constructor(private router: Router, private utils: UtilsService) {}

  ngOnInit() {
    this.videoUrl = this.utils.safeVideoUrl(this.recentSermon.src);
  }
}
