import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BodegaRegistrarDto } from 'src/app/dtos/bodega-registrar';
import { ResponseMainDto } from 'src/app/dtos/response-main';
import { BodegaServicioService } from 'src/app/servicios/bodega-servicio.service';

@Component({
  selector: 'app-bodega-registrar',
  templateUrl: './bodega-registrar.component.html',
  styleUrls: ['./bodega-registrar.component.scss']
})
export class BodegaRegistrarComponent implements OnInit {

  bodegaForm: FormGroup;

  constructor(private fb: FormBuilder, private bodegaSvc: BodegaServicioService) {
    this.bodegaForm = this.cargarFormulario();
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
    const bodega = new BodegaRegistrarDto(this.bodegaForm.value.nombre, this.bodegaForm.value.direccion,
      this.bodegaForm.value.ciudad)
    ;
    this.bodegaSvc.registrar(bodega).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error.response);
    });
    this.bodegaForm.reset();
  }

}
