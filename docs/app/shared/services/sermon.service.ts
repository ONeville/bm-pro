import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sermon, DATA_SEMONS } from '../models';

@Injectable()
export class SermonService {
  constructor(private utils: UtilsService) {}

  getSermons(): Observable<Sermon[]> {
    return of(DATA_SEMONS).pipe(
      map(items =>
        items.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      ),
      map(item => item as Sermon[]),
      map(item => {
        item.forEach(e => {
          e.src = this.utils.safeVideoUrl(e.src);
        });
        return item;
      })
    );
  }

  sortByKey(items: Sermon[], key) {
    return items.sort((a, b) => {
      let x = a[key];
      let y = b[key];

      if (typeof x === 'string') {
        x = ('' + x).toLowerCase();
      }
      if (typeof y === 'string') {
        y = ('' + y).toLowerCase();
      }

      return x < y ? -1 : x > y ? 1 : 0;
    });
  }
}
