import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LibPuntoEquilibrioRoutingModule } from './lib-punto-equilibrio-routing.module';
import { LibPuntoEquilibrioComponent } from './lib-punto-equilibrio.component';


@NgModule({
  declarations: [
    LibPuntoEquilibrioComponent
  ],
  imports: [
    CommonModule,
    LibPuntoEquilibrioRoutingModule,
    FormsModule
  ]
})
export class LibPuntoEquilibrioModule { }
