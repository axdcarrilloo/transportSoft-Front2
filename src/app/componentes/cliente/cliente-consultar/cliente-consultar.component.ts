import { Component, OnInit } from '@angular/core';

import { ClienteServicioService } from 'src/app/servicios/cliente-servicio.service';

import { ClienteRegistrarDto } from 'src/app/dtos/cliente-registrar';
import { ResponseMainDto } from 'src/app/dtos/response-main';

@Component({
  selector: 'app-cliente-consultar',
  templateUrl: './cliente-consultar.component.html',
  styleUrls: ['./cliente-consultar.component.scss']
})
export class ClienteConsultarComponent implements OnInit {

  clientes: ClienteRegistrarDto[] = [];

  constructor(private clienteSvc: ClienteServicioService) { }

  ngOnInit(): void {
  }

  cargarClientes(): void {
    this.clienteSvc.consultarTodos().subscribe((data: ResponseMainDto) => {
      if(data != null) {
        this.clientes = data.response;
      }
    });
  }

}
