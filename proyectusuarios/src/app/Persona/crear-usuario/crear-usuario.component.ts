import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import { ListarComponent } from '../listar/listar.component';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  persona:Persona=new Persona();
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert('Su Usuario se a creado con exito!');
      this.router.navigate(["listar"]);
    })
  }
}
