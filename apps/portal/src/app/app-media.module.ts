import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudiaComponent 
, VideoComponent } from './app.component.index';

@NgModule({
    declarations: [AudiaComponent, VideoComponent],
    imports: [CommonModule],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: []
})
export class AppMediaModule {}