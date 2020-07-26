import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleLazyLoadComponent } from './module-lazy-load.component';

const routes: Routes = [{ path: '', component: ModuleLazyLoadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleLazyLoadRoutingModule { }
