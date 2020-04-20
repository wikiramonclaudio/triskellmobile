import { PrimeModule } from './../../prime.module';
import { SchedulerComponent } from './../../pages/scheduler/scheduler.component';
import { PreferencesComponent } from './../../pages/preferences/preferences.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';

import { ContentRoutingModule } from './content-routing.module';
import { MbscModule } from '@mobiscroll/angular';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';

import { ChartComponent } from '@src/app/components/chart/chart.component';
import { BarChartDemoComponent } from '@src/app/components/bar-chart-demo/bar-chart-demo.component';
import { LineComponent } from '@src/app/components/line/line.component';
import { PieChartComponent } from '@src/app/components/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    PreferencesComponent,
    SchedulerComponent,
    DashboardComponent,
    ChartComponent,
    BarChartDemoComponent,
    LineComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ContentRoutingModule,
    jqxSchedulerModule,
    MbscModule,
    PrimeModule
  ]
})
export class ContentModule { }
