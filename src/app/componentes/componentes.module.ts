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

@NgModule({
  declarations: [
    MenuPrincipalComponent, ClientRegistrarComponent, ClienteConsultarComponent, CamionRegistrarComponent, CamionConsultarComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, AppRoutingModule, ServiciosModule
  ],
  exports: [
    MenuPrincipalComponent, ClientRegistrarComponent, ClienteConsultarComponent
  ]
})
export class ComponentesModule { }
