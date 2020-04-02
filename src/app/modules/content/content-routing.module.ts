import { PreferencesComponent } from '@src/app/pages/preferences/preferences.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// rutas del modulo content
const routes: Routes = [
  { path : 'preferences', component: PreferencesComponent },
  // { path : 'grid', component: PreferencesComponent },
  // { path : 'kanban', component: PreferencesComponent },
  // { path : 'scrum', component: PreferencesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
