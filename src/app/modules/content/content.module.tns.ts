import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ContentRoutingModule } from './content-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';


@NgModule({
  declarations: [],
  imports: [
    ContentRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ContentModule { }
