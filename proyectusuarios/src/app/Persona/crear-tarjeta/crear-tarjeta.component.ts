import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Target } from '@angular/compiler';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})

export class CrearTarjetaComponent implements OnInit {

  persona: Persona=new Persona();
  public personaSeleccionada: Persona=new Persona(); 
  constructor(public service:ServiceService, private router:Router) { }
  public listItems: Array<string> =[];
  tarjeta:Tarjeta = new Tarjeta();
  ngOnInit(){
    this.drowDowmvalues();
  }

  drowDowmvalues(){
   return  this.service.getDropDownValues()
   .subscribe(data=>{
     console.log(data);
     
     data.forEach(element => {
      console.log(data);
       this.listItems.push(element);
      console.log(this.listItems.keys());
       
     });
   }) 
  }
   
  capturar() {
    console.log( "ID" +this.personaSeleccionada);
  }
  GuardarTarjeta(){
    console.log("ID: "+ this.tarjeta.id);
    console.log("Nombre: "+ this.tarjeta.nombre);
    console.log("Numero: "+ this.tarjeta.numero);
    this.service.createTarjeta(this.tarjeta)
    .subscribe(data=>{
      alert('Su Usuario se a creado con exito!');
      this.router.navigate(["listar"]);
    })
  }
}


