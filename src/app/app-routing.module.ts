import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodegaConsultarComponent } from './componentes/bodega/bodega-consultar/bodega-consultar.component';
import { BodegaRegistrarComponent } from './componentes/bodega/bodega-registrar/bodega-registrar.component';

import { CamionConsultarComponent } from './componentes/camion/camion-consultar/camion-consultar.component';
import { CamionRegistrarComponent } from './componentes/camion/camion-registrar/camion-registrar.component';
import { ClientRegistrarComponent } from './componentes/cliente/client-registrar/client-registrar.component';
import { ClienteConsultarComponent } from './componentes/cliente/cliente-consultar/cliente-consultar.component';
import { FlotaConsultarComponent } from './componentes/flota/flota-consultar/flota-consultar.component';
import { FlotaRegistrarComponent } from './componentes/flota/flota-registrar/flota-registrar.component';
import { PuertoConsultarComponent } from './componentes/puerto/puerto-consultar/puerto-consultar.component';
import { PuertoRegistrarComponent } from './componentes/puerto/puerto-registrar/puerto-registrar.component';


const routes: Routes = [
  { path: 'puerto-consultar', component: PuertoConsultarComponent },
  { path: 'puerto-registrar', component: PuertoRegistrarComponent },
  { path: 'bodega-consultar', component: BodegaConsultarComponent },
  { path: 'bodega-registrar', component: BodegaRegistrarComponent },
  { path: 'flota-consultar', component: FlotaConsultarComponent },
  { path: 'flota-registrar', component: FlotaRegistrarComponent },
  { path: 'camion-consultar', component: CamionConsultarComponent },
  { path: 'camion-registrar', component: CamionRegistrarComponent },
  { path: 'cliente-consultar', component: ClienteConsultarComponent },
  { path: 'cliente-registrar', component: ClientRegistrarComponent }
  // { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
