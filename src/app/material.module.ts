import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatExpansionModule,
        MatCardModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatExpansionModule,
        MatCardModule,
        MatTabsModule
    ]
})

export class MaterialModule {}
