import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sht-wmb-archives',
  templateUrl: './wmb-archives.component.html',
  styleUrls: ['./wmb-archives.component.css']
})
export class WmbArchivesComponent implements OnInit {
  slides: any = [
    { title: 'Faith', description: 'God on Mountan is also God in the valley', src: '../../assets/images/slide1.jpg'},
    { title: 'Praise', description: 'I praise you in the storm and I lift my hands', src: '../../assets/images/slide2.jpg'},
    { title: 'Evening Time', description: 'The message of the hour', src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg'}
  ];

  recentSermon: any = {
    title: 'La delivrance de Dieu dans un temps périlleux',
    preacher: 'Pasteur Richard Diyoka',
    date: 'Dimanche, 30-09-2018M',
    location: 'BibleWay Cloverdale - Vancouver, CA',
    src: 'https://r2---sn-q4flrn7k.googlevideo.com/videoplayback?ipbits=0&amp;sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&amp;signature=2BCBB8B3DC3FD2B36501806E00D22100658C6669.11F8404DA631CD112DA7CA8C2BA7E4B8097056FD&amp;dur=205.380&amp;expire=1539169464&amp;ip=209.205.211.130&amp;key=cms1&amp;lmt=1389839245235926&amp;fvip=2&amp;source=youtube&amp;id=o-AKIl2q3Q92yC8NjU1ldbqjOz4DavPT9h4bjaPSiz8Vpo&amp;ratebypass=yes&amp;gir=yes&amp;clen=8906670&amp;ei=WIi9W62rEe3j8gS08pW4BA&amp;requiressl=yes&amp;mime=video/mp4&amp;itag=18&amp;pl=32&amp;c=WEB&amp;quality=medium&amp;type=video%2Fmp4%3B+codecs%3D%22avc1.42001E%2C+mp4a.40.2%22&amp;title=(HDvd9.co)_William-Branhams-prophecy-about-the-death-of-Marilyn-Monroe&amp;rm=sn-ab5ee77l&amp;fexp=23763603&amp;req_id=87df98dfa82fa3ee&amp;ipbypass=yes&amp;mip=2605:6000:8c87:3e00:454f:55bd:61b5:f02d&amp;redirect_counter=2&amp;cm2rm=sn-q4fe7y7l&amp;cms_redirect=yes&amp;mm=34&amp;mn=sn-q4flrn7k&amp;ms=ltu&amp;mt=1539147825&amp;mv=m'
  };

  videos: any = [
    {
      title: 'Le Prophète du 20è Siècle 1953 Indiana',
      preacher: 'WILLIAM  MARRION  BRANHAM',
      date: '1953',
      location: 'WILLIAM  BRANHAM Home - Indiana, USA',
      src: 'https://www.youtube.com/embed/A7U8jTIuLQI'
    },
    {
      title: 'La delivrance de Dieu dans un temps périlleux',
      preacher: 'Pasteur Richard Diyoka',
      date: 'Dimanche, 30-09-2018M',
      location: 'BibleWay Cloverdale - Vancouver, CA',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4'
    },
    {
      title: 'La delivrance de Dieu dans un temps périlleux',
      preacher: 'Pasteur Richard Diyoka',
      date: 'Dimanche, 30-09-2018M',
      location: 'BibleWay Cloverdale - Vancouver, CA',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4'
    }
  ]
  myInterval: number = 3000;

  constructor() { }

  ngOnInit() {
  }

}
