import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  PAGES,
  ContactComponent,
  DonationComponent,
  AssembleeComponent,
  AssembleePastorComponent,
  AssembleeStaffComponent,
  AssembleeMorijahComponent,
  AssembleeEcamoComponent,
  WmbComponent,
  WmbTestimonyComponent,
  WmbArchivesComponent,
  ServicesComponent,
  ServicesDirectComponent,
  ServicesSermonsComponent,
  MultimediaComponent,
  MultimediaMessageComponent,
  MultimediaBibleComponent,
  MultimediaMusicComponent,
  MultimediaPhotoComponent,
  MultimediaVideoComponent,
  MultimediaDiversComponent,
  ShekinakPubComponent
} from './pages';
import { CommonModule } from '@angular/common';
import { AppBootstrapModule } from './app-bootstrap.module';
import { SearchService } from '@pages/services-sermons/search-sermon.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Shekinkah Tabernacle' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Shekinkah Tabernacle: Contact' }
  },
  {
    path: 'donation',
    component: DonationComponent,
    data: { title: 'Shekinkah Tabernacle: Donation' }
  },
  {
    path: 'assemblee',
    component: AssembleeComponent,
    data: { title: 'Shekinkah Tabernacle: Assemblee' }
  },
  {
    path: 'pastor',
    component: AssembleePastorComponent,
    data: { title: 'Shekinkah Tabernacle: Pastor' }
  },
  {
    path: 'assemblee-staff',
    component: AssembleeStaffComponent,
    data: { title: 'Shekinkah Tabernacle: Staff' }
  },
  {
    path: 'morijah',
    component: AssembleeMorijahComponent,
    data: { title: 'Shekinkah Tabernacle: Morijah' }
  },
  {
    path: 'ecamo',
    component: AssembleeEcamoComponent,
    data: { title: 'Shekinkah Tabernacle: ECAMO' }
  },
  {
    path: 'prophet',
    component: WmbComponent,
    data: { title: 'Shekinkah Tabernacle: Prophet' }
  },
  {
    path: 'wmb-testimony',
    component: WmbTestimonyComponent,
    data: { title: 'Shekinkah Tabernacle: Testimony' }
  },
  {
    path: 'wmb-archives',
    component: WmbArchivesComponent,
    data: { title: 'Shekinkah Tabernacle: Archives' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Shekinkah Tabernacle: Services' }
  },
  {
    path: 'shekinah-pub',
    component: ShekinakPubComponent,
    data: { title: 'Shekinkah Publication' }
  },
  {
    path: 'live-streaming',
    component: ServicesDirectComponent,
    data: { title: 'Shekinkah Tabernacle: Live streaming' }
  },
  {
    path: 'sermons',
    component: ServicesSermonsComponent,
    data: { title: 'Shekinkah Tabernacle: Sermons' }
  },
  {
    path: 'news',
    component: MultimediaComponent,
    data: { title: 'Shekinkah Tabernacle: News' }
  },
  {
    path: 'message',
    component: MultimediaMessageComponent,
    data: { title: 'Shekinkah Tabernacle: Message' }
  },
  {
    path: 'bible',
    component: MultimediaBibleComponent,
    data: { title: 'Shekinkah Tabernacle: Bible' }
  },
  {
    path: 'music',
    component: MultimediaMusicComponent,
    data: { title: 'Shekinkah Tabernacle: Music' }
  },
  {
    path: 'photo',
    component: MultimediaPhotoComponent,
    data: { title: 'Shekinkah Tabernacle: Photo' }
  },
  {
    path: 'video',
    component: MultimediaVideoComponent,
    data: { title: 'Shekinkah Tabernacle: Video' }
  },
  {
    path: 'event',
    component: MultimediaDiversComponent,
    data: { title: 'Shekinkah Tabernacle: Event' }
  },
  {
    path: '**',
    component: HomeComponent,
    data: { title: 'Shekinkah Tabernacle' }
  }
];

@NgModule({
  declarations: [...PAGES],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true
    }),
    AppBootstrapModule
  ],
  providers: [SearchService],
  exports: [RouterModule]
})
export class AppRoutingModule {}
