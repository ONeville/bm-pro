import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { AppMediaModule } from './app-media.module';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HeaderComponent } from './shell/header.component';
import { HeaderTopComponent } from './shell/header-top.component';
import { FooterComponent } from './shell/footer.component';

import { UtilsService, SermonService } from "./shared/utils";
import { SearchService } from '../app/views/services-sermons/search-sermon.service';
import { PagerService } from "./services";


@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, HeaderTopComponent],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AppMediaModule,
    BsDropdownModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NxModule.forRoot()
  ],
  providers: [UtilsService, SermonService, PagerService, SearchService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
