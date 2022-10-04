import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlotaConsultarDto } from 'src/app/dtos/flota-consultar';
import { ResponseMainDto } from 'src/app/dtos/response-main';
import { FlotaServicioService } from 'src/app/servicios/flota-servicio.service';

@Component({
  selector: 'app-flota-consultar',
  templateUrl: './flota-consultar.component.html',
  styleUrls: ['./flota-consultar.component.scss']
})
export class FlotaConsultarComponent implements OnInit {

  flotas: FlotaConsultarDto[] = [];

  constructor(private flotaSvc: FlotaServicioService) {
    this.cargarFlotas();
   }

  ngOnInit(): void {
  }

  eliminar(id: number): void {
    this.flotaSvc.eliminar(id).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
        this.cargarFlotas();
      }
    }, (error: HttpErrorResponse) => {
        console.log(error.error.response);
    });
  }

  cargarFlotas(): void {
    this.flotaSvc.consultarTodas().subscribe((data: ResponseMainDto) => {
      if(data != null) {
        this.flotas = data.response;
      }
    });
  }

}
