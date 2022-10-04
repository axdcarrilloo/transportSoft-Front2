import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PuertoConsultarDto } from 'src/app/dtos/puerto-consulta';
import { ResponseMainDto } from 'src/app/dtos/response-main';
import { PuertoServicioService } from 'src/app/servicios/puerto-servicio.service';

@Component({
  selector: 'app-puerto-consultar',
  templateUrl: './puerto-consultar.component.html',
  styleUrls: ['./puerto-consultar.component.scss']
})
export class PuertoConsultarComponent implements OnInit {

  puertos: PuertoConsultarDto[] = [];

  constructor(private puertoSvc: PuertoServicioService) {
    this.cargarPuertos();
   }

  ngOnInit(): void {
  }

  eliminar(id: number): void {
    this.puertoSvc.eliminar(id).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
        this.cargarPuertos();
      }
    }, (error: HttpErrorResponse) => {
        console.log(error.error.response);
    });
  }

  cargarPuertos(): void {
    this.puertoSvc.consultarTodas().subscribe((data: ResponseMainDto) => {
      if(data != null) {
        this.puertos = data.response;
      }
    });
  }

}
