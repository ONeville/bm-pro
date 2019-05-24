import { Injectable } from '@angular/core';
import { SermonService } from '@shared/services';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {
  baseUrl = 'https://api.cdnjs.com/libraries';
  queryUrl = '?search=';

  constructor(private service: SermonService) {}

  //   search(terms: Observable<string>) {
  //     return terms.pipe(
  //         debounceTime(400),
  //         distinctUntilChanged(),
  //         switchMap(term => this.searchEntries(term))
  //     );
  //   }

  searchSermons(term) {
    return this.service
      .getSermons()
      .pipe(
        map(item =>
          item.filter(
            x =>
              x.title.includes(term) ||
              x.preacher.includes(term) ||
              x.date.includes(term) ||
              x.location.includes(term)
          )
        )
      );
  }
}
