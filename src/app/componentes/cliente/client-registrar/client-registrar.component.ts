import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteRegistrarDto } from 'src/app/dtos/cliente-registrar';
import { ResponseMainDto } from 'src/app/dtos/response-main';
import { ClienteServicioService } from 'src/app/servicios/cliente-servicio.service';

@Component({
  selector: 'app-client-registrar',
  templateUrl: './client-registrar.component.html',
  styleUrls: ['./client-registrar.component.scss']
})
export class ClientRegistrarComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private clienteSvc: ClienteServicioService) {
    this.clienteForm = this.cargarFormulario();
   }

  ngOnInit(): void {
  }

  registrar(): void {
    const cliente = new ClienteRegistrarDto(this.clienteForm.value.tipoDocumento, this.clienteForm.value.documento,
      this.clienteForm.value.nombres, this.clienteForm.value.apellidos, this.clienteForm.value.direccion,
      this.clienteForm.value.ciudad, this.clienteForm.value.correo, this.clienteForm.value.telefono)
    ;
    this.clienteSvc.registrar(cliente).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error.response);
    });
    this.clienteForm.reset();
  }

  cargarFormulario(): FormGroup{
    return this.fb.group({
      tipoDocumento: ['',  [Validators.required]],
      documento: ['',  [Validators.required]],
      nombres: ['',  [Validators.required]],
      apellidos: ['',  [Validators.required]],
      direccion: ['',  [Validators.required]],
      ciudad: ['',  [Validators.required]],
      correo: ['',  [Validators.required]],
      telefono: ['',  [Validators.required]]
    });
  }

}
