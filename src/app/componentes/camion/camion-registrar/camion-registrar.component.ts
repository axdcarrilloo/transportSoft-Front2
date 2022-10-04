import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CamionRegistrarDto } from 'src/app/dtos/camion-registrar';
import { ResponseMainDto } from 'src/app/dtos/response-main';
import { CamionServicioService } from 'src/app/servicios/camion-servicio.service';

@Component({
  selector: 'app-camion-registrar',
  templateUrl: './camion-registrar.component.html',
  styleUrls: ['./camion-registrar.component.scss']
})
export class CamionRegistrarComponent implements OnInit {

  camionForm: FormGroup;

  constructor(private fb: FormBuilder, private camionSvc: CamionServicioService) {
    this.camionForm = this.cargarFormulario();
   }

  ngOnInit(): void {
  }

  registrar(): void {
    const camion = new CamionRegistrarDto(this.camionForm.value.placa, this.camionForm.value.desripcion,
      this.camionForm.value.conductor)
    ;
    this.camionSvc.registrar(camion).subscribe((data: ResponseMainDto) => {
      if(data != null) {
        console.log(data.mensaje);
      }
    }, (error: HttpErrorResponse) => {
      console.log(error.error.response);
    });
    this.camionForm.reset();
  }

  cargarFormulario(): FormGroup{
    return this.fb.group({
      placa: ['',  [Validators.required]],
      desripcion: ['',  [Validators.required]],
      conductor: ['',  [Validators.required]]
    });
  }

}
