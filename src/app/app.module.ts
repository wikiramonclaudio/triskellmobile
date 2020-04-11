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

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainSidebarComponent,
    TopNavbarComponent
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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
