import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CamionConsultarDto } from 'src/app/dtos/camion-consultar';
import { ResponseMainDto } from 'src/app/dtos/response-main';
import { CamionServicioService } from 'src/app/servicios/camion-servicio.service';

@Component({
  selector: 'app-camion-consultar',
  templateUrl: './camion-consultar.component.html',
  styleUrls: ['./camion-consultar.component.scss']
})
export class CamionConsultarComponent implements OnInit {

  camiones: CamionConsultarDto[] = [];

  constructor(private camionSvc: CamionServicioService) { 
    this.cargarCamiones();
  }

  ngOnInit(): void {
  }

  eliminar(id: number): void {
    this.camionSvc.eliminar(id).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
        this.cargarCamiones();
      }
    }, (error: HttpErrorResponse) => {
        console.log(error.error.response);
    });
  }

  cargarCamiones(): void {
    this.camionSvc.consultarTodos().subscribe((data: ResponseMainDto) => {
      if(data != null) {
        this.camiones = data.response;
      }
    });
  }

}
