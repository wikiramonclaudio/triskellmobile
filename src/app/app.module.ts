import { MbscModule } from '@mobiscroll/angular';
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

import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
import { BreadCrumbsComponent } from '@src/app/components/bread-crumbs/bread-crumbs.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainSidebarComponent,
    TopNavbarComponent,
    BreadCrumbsComponent
  ],
  imports: [ 
    MbscModule,  
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
    ToastModule,
    BreadcrumbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
