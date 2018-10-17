import { Injectable } from '@angular/core';

import { SermonService, Sermon } from "../../shared/utils";
import { Observable } from "rxjs";
import { map, debounceTime, distinctUntilChanged, switchMap  } from "rxjs/operators";

@Injectable()
export class SearchService {
  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';

  constructor(private service: SermonService) { }

//   search(terms: Observable<string>) {
//     return terms.pipe(
//         debounceTime(400),
//         distinctUntilChanged(),
//         switchMap(term => this.searchEntries(term))
//     );
//   }
  
  searchSermons(term) {
    
    return this.service.getSermons()
    .pipe(
        map(item => item.filter(x => 
            x.title.includes(term) 
            || x.preacher.includes(term)
            || x.date.includes(term)
            || x.location.includes(term)
        ))
    );
  }
}