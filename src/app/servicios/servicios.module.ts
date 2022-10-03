import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClienteServicioService } from './cliente-servicio.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    
  ],
  providers: [
    ClienteServicioService
  ]
})
export class ServiciosModule { }
