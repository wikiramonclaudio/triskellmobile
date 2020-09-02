import { PrimeModule } from '@src/app/prime.module';
import { SchedulerComponent } from '@src/app/pages/scheduler/scheduler.component';
import { PreferencesComponent } from '@src/app/pages/preferences/preferences.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// DYNAMIC FORMS (Attributes)
import { DynamicFormsModule } from './../dynamic-forms/dynamic-forms.module';

// import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';

import { ContentRoutingModule } from '@src/app/modules/content/content-routing.module';
import { MbscModule } from '@mobiscroll/angular';
import { DashboardComponent } from '@src/app/pages/dashboard/dashboard.component';

import { ChartComponent } from '@src/app/components/chart/chart.component';
import { BarChartDemoComponent } from '@src/app/components/bar-chart-demo/bar-chart-demo.component';
import { LineComponent } from '@src/app/components/line/line.component';
import { PieChartComponent } from '@src/app/components/pie-chart/pie-chart.component';

import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MaterialModule } from '@src/app/material.module';
import { ObjectListComponent } from '@src/app/pages/object-list/object-list.component';

// import { TkchatComponent } from '@src/app/pages/tkchat/tkchat.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '@src/environments/environment';

import { SharedModule} from './../shared/shared.module';
import { ObjectDetailComponent } from '@src/app/pages/object-detail/object-detail.component';
import { FilesComponent } from '@src/app/pages/files/files.component';
import { AttributesComponent } from '@src/app/pages/attributes/attributes.component';
import { CommentsComponent } from '@src/app/pages/comments/comments.component';
import { MyItemsComponent } from '@src/app/pages/my-items/my-items.component';
import { TopicComponent } from '@src/app/pages/topic/topic.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    PreferencesComponent,
    SchedulerComponent,
    DashboardComponent,
    ChartComponent,
    BarChartDemoComponent,
    LineComponent,
    PieChartComponent,
    ObjectListComponent,
    ObjectDetailComponent,
    FilesComponent,
    AttributesComponent,
    CommentsComponent,
    MyItemsComponent,
    TopicComponent
    // TkchatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ContentRoutingModule,
    // jqxSchedulerModule,
    MbscModule,
    PrimeModule,
    MaterialModule,
    TranslateModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    DynamicFormsModule
    // AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    // AngularFirestore
  ]
})
export class ContentModule { }
