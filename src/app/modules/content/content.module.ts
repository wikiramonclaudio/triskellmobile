import { PreferencesComponent } from './../../pages/preferences/preferences.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContentRoutingModule } from './content-routing.module';


@NgModule({
  declarations: [
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
