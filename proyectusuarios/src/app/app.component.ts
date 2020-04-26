import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto Usuarios';

  constructor(private router: Router){}

  Listar(){

    this.router.navigate(['listar']);
  }
  CrearUsuario(){

    this.router.navigate(['crear-usuario']);
  }
  ListarTarjeta(){

    this.router.navigate(['listar-tarjeta']);
  }
  CrearTarjeta(){

    this.router.navigate(['crear-tarjeta']);
  }
}
