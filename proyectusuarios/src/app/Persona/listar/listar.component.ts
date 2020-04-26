import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService}from'../../Service/service.service'
import { from } from 'rxjs';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas= data;
    })

  }

  Editar(persona:Persona):void {
    console.log(persona.id);    
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editar-persona"]);

  }

  Listartarjetas(persona:Persona):void {
    localStorage.setItem("id", persona.id.toString());
    console.log("id"+persona.id.toString());
    this.router.navigate(["listar-tarjeta"]);
  }

  Eliminar(persona:Persona){
    console.log("id"+persona.id.toString());
    var varia =0
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas = this.personas.filter(p=>p!==persona);
      varia = 1;
      alert("Persona Eliminada..");
    })
    if(varia == 0 )
    {
      alert("No se puede Eliminar a la persona: "+persona.nombre + " por que tiene tarjetas asociadas");
    }
  }
}
