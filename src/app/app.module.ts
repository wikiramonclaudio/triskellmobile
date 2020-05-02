import { AngularFirestore } from '@angular/fire/firestore';
import { TkfirebaseService } from './services/tkfirebase.service';
import { PrimeModule } from './prime.module';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';


import { LoginComponent } from '@src/app/components/login/login.component';
import { MainSidebarComponent } from '@src/app/components/main-sidebar/main-sidebar.component';
import { BreadCrumbsComponent } from '@src/app/components/bread-crumbs/bread-crumbs.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { ToolbarComponent } from '@src/app/components/toolbar/toolbar.component';
import { MenubarComponent } from '@src/app/components/menubar/menubar.component';
import { MaterialModule } from './material.module';

// FIrebase
import { environment } from '@src/environments/environment';
import { AngularFireModule } from '@angular/fire';

import { SharedModule } from './modules/shared/shared.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainSidebarComponent,
    BreadCrumbsComponent,
    ToolbarComponent,
    MenubarComponent
  ],
  imports: [ 
    MbscModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    AngularFireModule.initializeApp(environment.firebase),
    PrimeModule,
    MaterialModule,
    SharedModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
