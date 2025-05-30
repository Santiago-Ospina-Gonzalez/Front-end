import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibSistemasSjfComponent } from './lib-sistemas-sjf.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: LibSistemasSjfComponent
  }
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LibSistemasSjfRoutingModule {

}
