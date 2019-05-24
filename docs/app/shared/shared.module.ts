import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SERVICES } from './services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...SERVICES]
})
export class SharedModule {}
