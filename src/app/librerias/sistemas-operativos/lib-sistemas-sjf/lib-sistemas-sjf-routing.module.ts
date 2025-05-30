import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LibSistemasSjfComponent } from './lib-sistemas-sjf.component';
import { LibSistemasSjfRoutingModule } from './lib-sistemas-sjf-routing.module';

@NgModule({
  declarations: [LibSistemasSjfComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LibSistemasSjfRoutingModule
  ]
})
export class LibSistemasSjfModule {

}
