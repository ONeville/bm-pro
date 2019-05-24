import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LAYOUTS } from './layout';

import {
  SidenavModule,
  WavesModule,
  MDBBootstrapModulesPro
} from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [AppComponent, ...LAYOUTS],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SidenavModule,
    WavesModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [
    { 
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    { 
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
