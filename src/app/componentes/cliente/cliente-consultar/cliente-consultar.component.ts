import { Component, OnInit } from '@angular/core';

import { ClienteServicioService } from 'src/app/servicios/cliente-servicio.service';

import { ResponseMainDto } from 'src/app/dtos/response-main';
import { ClienteConsultarDto } from 'src/app/dtos/cliente-consultar';

@Component({
  selector: 'app-cliente-consultar',
  templateUrl: './cliente-consultar.component.html',
  styleUrls: ['./cliente-consultar.component.scss']
})
export class ClienteConsultarComponent implements OnInit {

  clientes: ClienteConsultarDto[] = [];
  data: any[] = [];
  modalEliminar: any;

  constructor(private clienteSvc: ClienteServicioService) { 
    this.cargarClientes();
  }

  ngOnInit(): void {
    this.modalEliminar = document;
  }

  eliminar(id: number): void {
    this.clienteSvc.eliminar(id).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
        this.cargarClientes();
      }
    });
  }

  cargarClientes(): void {
    this.clienteSvc.consultarTodos().subscribe((data: ResponseMainDto) => {
      if(data != null) {
        this.clientes = data.response;
      }
    });
  }

}
