import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { My000000Component } from './Module000000/my.000000.component';
import { My000001Component } from './Module000001/my.000001.component';
import {DataTableComponent } from './data-table/data-table.component';
import { TimerComponent } from './timer/timer.component';


const routes: Routes = [
  {
    path: 'mod0', component: My000000Component, pathMatch: 'full'
  },
  {
    path: 'mod1', component: My000001Component, pathMatch: 'full'
  },
  { path: 'DataTable', component: DataTableComponent, pathMatch: 'full' },
  {
    path: 'timer', component: TimerComponent, pathMatch: 'full'
  }
  // tslint:disable-next-line:max-line-length
  // { path: 'ModuleLazyLoad', loadChildren: () => import('./module-lazy-load/module-lazy-load.module.ngfactory').then(m => m.ModuleLazyLoadModuleNgFactory), pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
