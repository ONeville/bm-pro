import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BadgeModule,
  BreadcrumbModule,
  ButtonsModule,
  CardsFreeModule,
  CarouselModule,
  ChartsModule,
  CheckboxModule,
  CollapseModule,
  DropdownModule,
  IconsModule,
  InputsModule,
  ModalModule,
  NavbarModule,
  PopoverModule,
  TooltipModule,
  WavesModule,
  MDBBootstrapModule,
  ModalDirective
} from 'angular-bootstrap-md';

import {
  AccordionModule,
  ToastModule,
  AutoCompleterModule,
  AutoFormatModule,
  CardsModule,
  DatepickerModule,
  ChartSimpleModule,
  FileInputModule,
  LightBoxModule,
  SelectModule,
  PreloadersModule,
  RangeModule,
  ScrollSpyModule,
  SidenavModule,
  SmoothscrollModule,
  StepperModule,
  StickyContentModule,
  TabsModule,
  MaterialChipsModule,
  TimePickerModule,
  MDBBootstrapModulesPro
} from 'ng-uikit-pro-standard';

export const UIKIT_FREE = [
  BadgeModule,
  BreadcrumbModule,
  ButtonsModule,
  CardsFreeModule,
  CarouselModule.forRoot(),
  ChartsModule,
  CheckboxModule,
  CollapseModule.forRoot(),
  DropdownModule.forRoot(),
  IconsModule,
  InputsModule.forRoot(),
  ModalModule.forRoot(),
  NavbarModule,
  PopoverModule.forRoot(),
  TooltipModule.forRoot(),
  WavesModule.forRoot(),
  MDBBootstrapModule.forRoot()
];

export const UIKIT = [
  AccordionModule,
  ToastModule,
  AutoCompleterModule,
  AutoFormatModule,
  CardsModule.forRoot(),
  DatepickerModule,
  ChartSimpleModule,
  FileInputModule,
  LightBoxModule,
  SelectModule,
  PreloadersModule,
  RangeModule,
  ScrollSpyModule,
  SidenavModule,
  SmoothscrollModule.forRoot(),
  StepperModule,
  StickyContentModule,
  TabsModule.forRoot(),
  MaterialChipsModule,
  TimePickerModule,
  // MDBBootstrapModulePro,
  MDBBootstrapModulesPro.forRoot()
];
// ModalModule, TooltipModule, PopoverModule, ButtonsModule

const SVC = [ModalDirective]

@NgModule({
  imports: [
    CommonModule,
    ...UIKIT_FREE,
    SidenavModule,
    // WavesModule,
    // CarouselModule.forRoot(),
    AccordionModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  providers: [...SVC],
  exports: [MDBBootstrapModule]
})
export class AppBootstrapModule {}
