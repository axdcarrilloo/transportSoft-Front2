import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BodegaConsultarDto } from 'src/app/dtos/bodega-consultar';
import { ResponseMainDto } from 'src/app/dtos/response-main';
import { BodegaServicioService } from 'src/app/servicios/bodega-servicio.service';

@Component({
  selector: 'app-bodega-consultar',
  templateUrl: './bodega-consultar.component.html',
  styleUrls: ['./bodega-consultar.component.scss']
})
export class BodegaConsultarComponent implements OnInit {

  bodegas: BodegaConsultarDto[] = [];

  constructor(private bodegaSvc: BodegaServicioService) {
    this.cargarBodegas();
   }

  ngOnInit(): void {
  }

  eliminar(id: number): void {
    this.bodegaSvc.eliminar(id).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
        this.cargarBodegas();
      }
    }, (error: HttpErrorResponse) => {
        console.log(error.error.response);
    });
  }

  cargarBodegas(): void {
    this.bodegaSvc.consultarTodas().subscribe((data: ResponseMainDto) => {
      if(data != null) {
        this.bodegas = data.response;
      }
    });
  }

}
