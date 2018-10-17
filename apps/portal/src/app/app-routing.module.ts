import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AppBootstrapModule } from './app-bootstrap.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ShellComponent
, ContactComponent 
, DonationComponent 
, AssembleeComponent 
, AssembleePastorComponent 
, AssembleeStaffComponent 
, AssembleeMorijahComponent 
, AssembleeEcamoComponent 
, WmbComponent 
, WmbTestimonyComponent 
, WmbArchivesComponent 
, ServicesComponent 
, ServicesDirectComponent 
, ServicesSermonsComponent 
, MultimediaComponent 
, MultimediaMessageComponent 
, MultimediaBibleComponent 
, MultimediaMusicComponent 
, MultimediaPhotoComponent 
, MultimediaVideoComponent 
, MultimediaDiversComponent } from './app.component.index';


import { SafeHtml } from './shared/pipes/safeHtml.pipe';

const appRoutes: Routes = [
  { path: '', component: ShellComponent, data: { title: 'Shekinkah Tabernacle' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Shekinkah Tabernacle: Contact' } },
  { path: 'donation', component: DonationComponent, data: { title: 'Shekinkah Tabernacle: Donation' } },
  { path: 'assemblee', component: AssembleeComponent, data: { title: 'Shekinkah Tabernacle: Assemblee' } },
  { path: 'pastor', component: AssembleePastorComponent, data: { title: 'Shekinkah Tabernacle: Pastor' } },
  { path: 'assemblee-staff', component: AssembleeStaffComponent, data: { title: 'Shekinkah Tabernacle: Staff' } },
  { path: 'morijah', component: AssembleeMorijahComponent, data: { title: 'Shekinkah Tabernacle: Morijah' } },
  { path: 'ecamo', component: AssembleeEcamoComponent, data: { title: 'Shekinkah Tabernacle: ECAMO' }  },
  { path: 'prophet', component: WmbComponent, data: { title: 'Shekinkah Tabernacle: Prophet' } },
  { path: 'wmb-testimony', component: WmbTestimonyComponent, data: { title: 'Shekinkah Tabernacle: Testimony' } },
  { path: 'wmb-archives', component: WmbArchivesComponent, data: { title: 'Shekinkah Tabernacle: Archives' } },
  { path: 'services', component: ServicesComponent, data: { title: 'Shekinkah Tabernacle: Services' } },
  { path: 'live-streaming', component: ServicesDirectComponent, data: { title: 'Shekinkah Tabernacle: Live streaming' } },
  { path: 'sermons', component: ServicesSermonsComponent, data: { title: 'Shekinkah Tabernacle: Sermons' } },
  { path: 'news', component: MultimediaComponent, data: { title: 'Shekinkah Tabernacle: News' } },
  { path: 'message', component: MultimediaMessageComponent, data: { title: 'Shekinkah Tabernacle: Message' } },
  { path: 'bible', component: MultimediaBibleComponent, data: { title: 'Shekinkah Tabernacle: Bible' } },
  { path: 'music', component: MultimediaMusicComponent, data: { title: 'Shekinkah Tabernacle: Music' } },
  { path: 'photo', component: MultimediaPhotoComponent, data: { title: 'Shekinkah Tabernacle: Photo' } },
  { path: 'video', component: MultimediaVideoComponent, data: { title: 'Shekinkah Tabernacle: Video' } },
  { path: 'event', component: MultimediaDiversComponent, data: { title: 'Shekinkah Tabernacle: Event' } },
  { path: '**',  component: ShellComponent, data: { title: 'Shekinkah Tabernacle' } }
];

@NgModule({
  declarations: [ ShellComponent, ContactComponent, DonationComponent, AssembleeComponent, AssembleePastorComponent, AssembleeStaffComponent, AssembleeMorijahComponent, AssembleeEcamoComponent, WmbComponent, WmbTestimonyComponent, WmbArchivesComponent, ServicesComponent, ServicesDirectComponent, ServicesSermonsComponent, MultimediaComponent, MultimediaMessageComponent, MultimediaBibleComponent, MultimediaMusicComponent, MultimediaPhotoComponent, MultimediaVideoComponent, MultimediaDiversComponent, SafeHtml
  ],
  imports: [
    CommonModule,
    AppBootstrapModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class AppRoutingModule { }
