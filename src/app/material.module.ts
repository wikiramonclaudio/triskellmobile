import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatButtonToggleModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatButtonToggleModule,
        MatGridListModule
    ]
})

export class MaterialModule {}
