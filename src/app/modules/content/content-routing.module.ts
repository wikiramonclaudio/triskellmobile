import { AttributesComponent } from './../../pages/attributes/attributes.component';
import { CommentsComponent } from '@src/app/pages/comments/comments.component';
import { FilesComponent } from './../../pages/files/files.component';
import { ObjectDetailComponent } from './../../pages/object-detail/object-detail.component';
import { TkchatComponent } from '@src/app/pages/tkchat/tkchat.component';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { SchedulerComponent } from '@src/app/pages/scheduler/scheduler.component';
import { PreferencesComponent } from '@src/app/pages/preferences/preferences.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectListComponent } from '@src/app/pages/object-list/object-list.component';

// rutas del modulo content
const routes: Routes = [
  { path : '', component: DashboardComponent, data: { title: 'Dashboard'} },
  { path : 'preferences', component: PreferencesComponent, data: { title: 'Preferences'} },
  { path : 'scheduler', component: SchedulerComponent, data: { title: 'Scheduler'} },
  { path : 'deliverables', component: ObjectListComponent, data: { title: 'Lista'} },
  { path : 'object-detail', component: ObjectDetailComponent, data: { title: 'Detalle del objeto'} },
  { path : 'files', component: FilesComponent, data: { title: 'Files'} },
  { path : 'comments', component: CommentsComponent, data: { title: 'Comments'} },
  { path : 'attributes', component: AttributesComponent, data: { title: 'Custom attributes'} },
  { path : 'chat', component: TkchatComponent, data: { title: 'Chat'} },
  // { path : 'grid', component: PreferencesComponent },
  // { path : 'kanban', component: PreferencesComponent },
  // { path : 'scrum', component: PreferencesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
