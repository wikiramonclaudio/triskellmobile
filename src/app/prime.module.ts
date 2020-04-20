import { NgModule } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenubarModule} from 'primeng/menubar';
import {MegaMenuModule} from 'primeng/megamenu';
@NgModule({
    imports: [
        CheckboxModule,
        CalendarModule,
        InputTextModule,
        ButtonModule,
        SidebarModule,
        ToolbarModule,
        ChartModule,
        ToastModule,
        BreadcrumbModule
    ],
    exports: [
        CheckboxModule,
        CalendarModule,
        InputTextModule,
        ButtonModule,
        SidebarModule,
        ToolbarModule,
        ChartModule,
        ToastModule,
        BreadcrumbModule,
        MenubarModule,
        MegaMenuModule,
    ]
})

export class PrimeModule {}
