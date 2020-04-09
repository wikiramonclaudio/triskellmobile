import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';

import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';

import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from '@src/app/components/login/login.component';
import { MainSidebarComponent } from '@src/app/components/main-sidebar/main-sidebar.component';
import { TopNavbarComponent } from '@src/app/components/top-navbar/top-navbar.component';
import {SidebarModule} from 'primeng/sidebar';

import {ToolbarModule} from 'primeng/toolbar';
import { ChartComponent } from '@src/app/components/chart/chart.component';

import {ChartModule} from 'primeng/chart';
import { BarChartDemoComponent } from '@src/app/components/bar-chart-demo/bar-chart-demo.component';
import { LineComponent } from '@src/app/components/line/line.component';
import {ToastModule} from 'primeng/toast';
import { PieChartComponent } from '@src/app/components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainSidebarComponent,
    TopNavbarComponent,
    ChartComponent,
    BarChartDemoComponent,
    LineComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CheckboxModule,
    CalendarModule,
    FormsModule,
    MatButtonModule,
    InputTextModule,
    ButtonModule,
    SidebarModule,
    ToolbarModule,
    ChartModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
