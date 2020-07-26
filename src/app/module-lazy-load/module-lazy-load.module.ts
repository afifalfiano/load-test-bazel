import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleLazyLoadRoutingModule } from './module-lazy-load-routing.module';
import { ModuleLazyLoadComponent } from './module-lazy-load.component';


@NgModule({
  declarations: [ModuleLazyLoadComponent],
  imports: [
    CommonModule,
    ModuleLazyLoadRoutingModule
  ]
})
export class ModuleLazyLoadModule { }
