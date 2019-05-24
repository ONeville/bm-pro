import { Injectable } from '@angular/core';

import {
  DomSanitizer,
  SafeUrl,
  SafeResourceUrl
} from '@angular/platform-browser';

@Injectable()
export class UtilsService {
  constructor(private sanitizer: DomSanitizer) {}

  public safeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  public safeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public generateYear(): number[] {
    let startYear = 1990;
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    while (startYear <= currentYear) {
      years.push(startYear++);
    }

    years.sort((x, y) => y - x);

    return years;
  }
}
