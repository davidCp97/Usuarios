import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';
import{ServiceService}from'../../Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  tarjetas:Tarjeta[];
  tarjeta: Tarjeta=new Tarjeta();
  constructor(private service:ServiceService, private router:Router) { }


  ngOnInit(){
    this.Listartarjetas();
    // this.service.getTargetas()
    // .subscribe(data=>{
    //   this.tarjetas= data;
    // })
  }

  Editar(tarjeta:Tarjeta):void {
    console.log(tarjeta);
    localStorage.setItem("idTarjeta", tarjeta.idTarjeta.toString());
    this.router.navigate(["editar-tarjeta"]);

  }

  Listartarjetas():void {
    let id=localStorage.getItem("id");
    this.service.getTargetasId(+id)
    .subscribe(data=>{
      this.tarjeta=data;
    })
  }
  Eliminar(tarjeta:Tarjeta){
    console.log("id"+tarjeta.id.toString());
    var varia =0
    this.service.deleteTarjeta(tarjeta)
    .subscribe(data=>{
      try {
      this.tarjetas = this.tarjetas.filter(p=>p!==tarjeta);

    } catch(e) {
      console.log(e); 
      alert("Tarjeta Eliminada..");
      this.router.navigate(["listar"])
    }
    })
  }
}
