import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { CrearUsuarioComponent } from './Persona/crear-usuario/crear-usuario.component';
import { ListarTarjetaComponent } from './Persona/listar-tarjeta/listar-tarjeta.component';
import { CrearTarjetaComponent } from './Persona/crear-tarjeta/crear-tarjeta.component';
import { EditarTarjetaComponent } from './Persona/editar-tarjeta/editar-tarjeta.component';
import { EditarPersonaComponent } from './Persona/editar-persona/editar-persona.component';


const routes: Routes = [
  {path:'listar', component: ListarComponent},
  {path: 'crear-usuario', component:CrearUsuarioComponent},
  {path: 'listar-tarjeta', component:ListarTarjetaComponent},
  {path: 'crear-tarjeta', component:CrearTarjetaComponent},
  {path: 'editar-tarjeta', component:EditarTarjetaComponent},
  {path: 'editar-persona', component:EditarPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
