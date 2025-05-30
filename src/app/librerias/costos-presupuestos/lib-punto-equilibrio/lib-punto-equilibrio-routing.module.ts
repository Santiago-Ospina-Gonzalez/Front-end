import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibPuntoEquilibrioComponent } from './lib-punto-equilibrio.component';

const routes: Routes = [
  {
    path: '',
    component: LibPuntoEquilibrioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibPuntoEquilibrioRoutingModule { }
