import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { SearchService } from './search-sermon.service';
import { Subject } from 'rxjs';
import { Sermon } from '@shared/models';
import { SermonService, PagerService, UtilsService } from '@shared/services';

@Component({
  selector: 'app-services-sermons',
  templateUrl: './services-sermons.component.html',
  styleUrls: ['./services-sermons.component.css']
})
export class ServicesSermonsComponent implements OnInit {
  currentSermon: Sermon;
  sermons: Sermon[] = [];
  years: number[] = [];

  pager: any = {};
  pagedItems: Sermon[];
  searchText: string;
  searchTerm$ = new Subject<string>();
  sermonSrc: any = 'assets/images/sermon.jpg';

  constructor(
    private service: SermonService,
    private pagerService: PagerService,
    private searchService: SearchService,
    private utilService: UtilsService
  ) {}

  ngOnInit() {
    this.years = this.utilService.generateYear();
    this.service.getSermons().subscribe(items => {
      this.sermons = items;
      this.setPage(1);
    });
  }

  loadItems(items: Sermon[]) {
    this.sermons = items;
    this.setPage(1);
  }

  play(item: Sermon) {
    this.currentSermon = item;
  }

  download(item: Sermon) {
    alert(item.title);
  }

  search(event) {
    if (event.key === 'Enter') {
      this.searchService.searchSermons(event.target.value).subscribe(items => {
        this.sermons = items;
        this.setPage(1);
      });

      event.preventDefault();
    }
  }

  onChange(sorteKey) {
    this.pagedItems = this.service.sortByKey(this.pagedItems, sorteKey);
  }

  onChangeByYear(value) {
    if (value === '(Tout)') {
      this.setPageAdv(this.sermons);
    } else {
      const filtered = this.sermons.filter(item => item.date.includes(value));
      this.setPageAdv(filtered);
    }
  }

  onChangePreacher(value) {
    if (value === '(Tout)') {
      this.setPageAdv(this.sermons);
    } else {
      let filtered = [];

      if (value === '1') {
        filtered = this.sermons.filter(item => item.isDefault);
      } else if (value === '2') {
        filtered = this.sermons.filter(item => item.islocal);
      } else {
        filtered = this.sermons.filter(item => item.isInvited);
      }
      this.setPageAdv(filtered);
    }
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.sermons.length, page, 4);
    this.pagedItems = this.sermons.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
    this.currentSermon = this.pagedItems[0];
  }

  setPageAdv(items: Sermon[]) {
    this.pager = this.pagerService.getPager(items.length, 1, 4);
    this.pagedItems = items.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
    this.currentSermon = this.pagedItems[0];
  }
}
