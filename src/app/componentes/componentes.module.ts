import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ClientRegistrarComponent } from './cliente/client-registrar/client-registrar.component';
import { ServiciosModule } from '../servicios/servicios.module';
import { ClienteConsultarComponent } from './cliente/cliente-consultar/cliente-consultar.component';
import { CamionRegistrarComponent } from './camion/camion-registrar/camion-registrar.component';
import { CamionConsultarComponent } from './camion/camion-consultar/camion-consultar.component';
import { FlotaRegistrarComponent } from './flota/flota-registrar/flota-registrar.component';
import { FlotaConsultarComponent } from './flota/flota-consultar/flota-consultar.component';
import { BodegaRegistrarComponent } from './bodega/bodega-registrar/bodega-registrar.component';
import { BodegaConsultarComponent } from './bodega/bodega-consultar/bodega-consultar.component';

@NgModule({
  declarations: [
    MenuPrincipalComponent, ClientRegistrarComponent, ClienteConsultarComponent, CamionRegistrarComponent, CamionConsultarComponent, FlotaRegistrarComponent, FlotaConsultarComponent, BodegaRegistrarComponent, BodegaConsultarComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, AppRoutingModule, ServiciosModule
  ],
  exports: [
    MenuPrincipalComponent
  ]
})
export class ComponentesModule { }
