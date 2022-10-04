import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientRegistrarComponent } from './componentes/cliente/client-registrar/client-registrar.component';
import { ClienteConsultarComponent } from './componentes/cliente/cliente-consultar/cliente-consultar.component';
import { CamionRegistrarComponent } from './componentes/camion/camion-registrar/camion-registrar.component';
import { CamionConsultarComponent } from './componentes/camion/camion-consultar/camion-consultar.component';



const routes: Routes = [
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
