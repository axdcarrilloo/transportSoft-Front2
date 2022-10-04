import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlotaRegistrarDto } from 'src/app/dtos/flota-registrar';
import { ResponseMainDto } from 'src/app/dtos/response-main';
import { FlotaServicioService } from 'src/app/servicios/flota-servicio.service';

@Component({
  selector: 'app-flota-registrar',
  templateUrl: './flota-registrar.component.html',
  styleUrls: ['./flota-registrar.component.scss']
})
export class FlotaRegistrarComponent implements OnInit {

  flotaForm: FormGroup;

  constructor(private flotaSvc: FlotaServicioService, private fb: FormBuilder) {
    this.flotaForm = this.cargarFormulario();
   }

  ngOnInit(): void {
  }

  cargarFormulario(): FormGroup {
    return this.fb.group({
      numero: ['',  [Validators.required]],
      desripcion: ['',  [Validators.required]],
      capitan: ['',  [Validators.required]]
    });
  }

  registrar(): void {
    console.log(this.flotaForm.value);
    const flota = new FlotaRegistrarDto(this.flotaForm.value.numero, this.flotaForm.value.desripcion,
      this.flotaForm.value.capitan)
    ;
    this.flotaSvc.registrar(flota).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error.response);
    });
    this.flotaForm.reset();
  }

}
