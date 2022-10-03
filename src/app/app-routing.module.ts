import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientRegistrarComponent } from './componentes/cliente/client-registrar/client-registrar.component';
import { ClienteConsultarComponent } from './componentes/cliente/cliente-consultar/cliente-consultar.component';


const routes: Routes = [
  { path: 'cliente-consultar', component: ClienteConsultarComponent },
  { path: 'cliente-registrar', component: ClientRegistrarComponent }
  // { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
