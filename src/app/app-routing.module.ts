import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashComponent } from './dash/dash.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'Dash'},
  { path: 'Dash', component: DashComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
