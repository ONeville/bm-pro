import { Injectable } from "@angular/core";

import { DomSanitizer } from '@angular/platform-browser';
import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable()
export class UtilsService {

    constructor(private sanitizer: DomSanitizer) { }

    public safeUrl(url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
    public safeVideoUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    
    public generateYear(): number[]{
      let startYear = 1990;
      const currentYear = new Date().getFullYear();
      const years: number[] = [];
      while ( startYear <= currentYear ) years.push(startYear++);
      
      years.sort((x,y) => y - x)

      return years;
   }
}

export class Sermon{
    id: number;
    title: string;
    preacher: string;
    date: string;
    location: string;
    src: any;
    isDefault: boolean;
    islocal: boolean;
    isInvited: boolean;
}

@Injectable()
export class SermonService{
  constructor(private utils: UtilsService){ }

  getSermons(): Observable<Sermon[]>{
    return of(DATA_SEMONS)
    .pipe(
      map(items => items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())),
      map(item => item as Sermon[]),
      map(item => {
          item.forEach(e =>{
          e.src = this.utils.safeVideoUrl(e.src);
        });
        return item;
      })
    );
  }

  sortByKey(items: Sermon[], key) {
    return items.sort(function(a, b) {
        var x = a[key];
        var y = b[key];

        if (typeof x == "string")
        {
            x = (""+x).toLowerCase(); 
        }
        if (typeof y == "string")
        {
            y = (""+y).toLowerCase();
        }

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
}



export const DATA_SEMONS = [{
    id: 1,
    title: "L'apostasie",
    preacher: "Fr Grace Dimpa",
    date: "6/20/2018",
    location: "Kinshasa, RDC",
    src: "https://player.vimeo.com/video/292694612?color=f5f8f9&title=0&byline=0&portrait=0",
    screen: "none",    
    isDefault: false,
    islocal: true,
    isInvited: false
  },{
    id: 2,
    title: "Le mystère du plan de la rédemption",
    preacher: "Dauphin Elalanga",
    date: "9/23/2018",
    location: "Kinshasa, RDC",
    src: "https://player.vimeo.com/video/291639712?color=f5f8f9&title=0&byline=0&portrait=0",
    screen: "none",    
    isDefault: false,
    islocal: true,
    isInvited: false
  },{
    id: 3,
    title: "Comment nous devons adorer",
    preacher: "Pasteur Faustin Lukumwena",
    date: "9/08/2018",
    location: "Kinshasa, RDC",
    src: "https://player.vimeo.com/video/291474042?color=f5f8f9&title=0&byline=0&portrait=0",
    screen: "none",    
    isDefault: false,
    islocal: false,
    isInvited: true
  },{
    id: 4,
    title: "Réflexion sur notre existence",
    preacher: "Pasteur Richard Diyoka",
    date: "6/09/2018",
    location: "Kinshasa, RDC",
    src: "https://player.vimeo.com/video/290988849?color=f5f8f9&title=0&byline=0&portrait=0",
    screen: "none",    
    isDefault: true,
    islocal: false,
    isInvited: false
  },{
    id: 5,
    title: "La delivrance de Dieu dans un temps périlleux",
    preacher: "Pasteur Richard Diyoka",
    date: "9/30/2016",
    location: "BibleWay Cloverdale - Vancouver, CA",
    src: "https://player.vimeo.com/video/293221804?color=f5f8f9&title=0&byline=0&portrait=0",
    screen: "none",    
    isDefault: true,
    islocal: false,
    isInvited: false
  },{
    id: 5,
    title: "Quelle maison me bâtirez-vous?",
    preacher: "Pasteur Richard Diyoka",
    date: "7/18/2018",
    location: "Kinshasa, RDC",
    src: "https://player.vimeo.com/video/280806870?color=f9f9f9&title=0&byline=0&portrait=0",
    screen: "none",    
    isDefault: true,
    islocal: false,
    isInvited: false
  }];