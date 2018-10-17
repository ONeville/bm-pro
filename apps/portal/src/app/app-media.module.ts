import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { AudiaComponent 
, VideoComponent } from './app.component.index';

@NgModule({
    declarations: [AudiaComponent, VideoComponent],
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: []
})
export class AppMediaModule {}