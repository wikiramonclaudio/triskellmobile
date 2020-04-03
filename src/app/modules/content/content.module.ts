import { SchedulerComponent } from './../../pages/scheduler/scheduler.component';
import { PreferencesComponent } from './../../pages/preferences/preferences.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';

import { ContentRoutingModule } from './content-routing.module';


@NgModule({
  declarations: [
    PreferencesComponent,
    SchedulerComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    jqxSchedulerModule
  ]
})
export class ContentModule { }
