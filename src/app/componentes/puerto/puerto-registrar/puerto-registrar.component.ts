import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PuertoRegistrarDto } from 'src/app/dtos/puerto-registrar';
import { ResponseMainDto } from 'src/app/dtos/response-main';
import { PuertoServicioService } from 'src/app/servicios/puerto-servicio.service';

@Component({
  selector: 'app-puerto-registrar',
  templateUrl: './puerto-registrar.component.html',
  styleUrls: ['./puerto-registrar.component.scss']
})
export class PuertoRegistrarComponent implements OnInit {

  puertoForm: FormGroup;

  constructor(private fb: FormBuilder, private puertoSvc: PuertoServicioService) { 
    this.puertoForm = this.cargarFormulario();
  }

  ngOnInit(): void {
  }

  cargarFormulario(): FormGroup {
    return this.fb.group({
      nombre: ['',  [Validators.required]],
      direccion: ['',  [Validators.required]],
      ciudad: ['',  [Validators.required]]
    });
  }

  registrar(): void {
    const puerto = new PuertoRegistrarDto(this.puertoForm.value.nombre, this.puertoForm.value.direccion,
      this.puertoForm.value.ciudad)
    ;
    this.puertoSvc.registrar(puerto).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error.response);
    });
    this.puertoForm.reset();
  }

}
