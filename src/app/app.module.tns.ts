import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LoginComponent } from '@src/app/components/login/login.component';
import { PreferencesComponent } from '@src/app/pages/preferences/preferences.component';
import { MainSidebarComponent } from '@src/app/components/main-sidebar/main-sidebar.component';
import { TopNavbarComponent } from '@src/app/components/top-navbar/top-navbar.component';
import { SchedulerComponent } from '@src/app/pages/scheduler/scheduler.component';
import { ChartComponent } from '@src/app/components/chart/chart.component';
import { BarChartDemoComponent } from '@src/app/components/bar-chart-demo/bar-chart-demo.component';
import { LineComponent } from '@src/app/components/line/line.component';
import { PieChartComponent } from '@src/app/components/pie-chart/pie-chart.component';
import { DashboardComponent } from '@src/app/pages/dashboard/dashboard.component';
import { BreadCrumbsComponent } from '@src/app/components/bread-crumbs/bread-crumbs.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainSidebarComponent,
    TopNavbarComponent,
    SchedulerComponent,
    ChartComponent,
    BarChartDemoComponent,
    LineComponent,
    PieChartComponent,
    DashboardComponent,
    BreadCrumbsComponent,
    // PreferencesComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
