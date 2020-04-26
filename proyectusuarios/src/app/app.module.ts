import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { CrearUsuarioComponent } from './Persona/crear-usuario/crear-usuario.component';
import { ListarTarjetaComponent } from './Persona/listar-tarjeta/listar-tarjeta.component';
import{ FormsModule } from '@angular/forms';
import{ ServiceService } from '../app/Service/service.service';
import{HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { CrearTarjetaComponent } from './Persona/crear-tarjeta/crear-tarjeta.component';
import { EditarPersonaComponent } from './Persona/editar-persona/editar-persona.component';
import { EditarTarjetaComponent } from './Persona/editar-tarjeta/editar-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CrearUsuarioComponent,
    ListarTarjetaComponent,
    CrearTarjetaComponent,
    EditarPersonaComponent,
    EditarTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
