import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAddComponent } from './cliente-add/cliente-add.component'
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component'
import { ClienteGetComponent } from './cliente-get/cliente-get.component'

const routes: Routes = [
  {
    path:'avaliacao/create',
    component: ClienteAddComponent
  },
  {
    path:'avaliacao/cliente/editar/:id',
    component: ClienteEditComponent
  },
  {
    path:'avaliacao/clientes',
    component: ClienteGetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
