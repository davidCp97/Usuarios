import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Tarjeta } from 'src/app/Modelo/Tarjeta';

@Component({
  selector: 'app-editar-tarjeta',
  templateUrl: './editar-tarjeta.component.html',
  styleUrls: ['./editar-tarjeta.component.css']
})
export class EditarTarjetaComponent implements OnInit {

  tarjeta: Tarjeta=new Tarjeta();
  constructor(private router:Router , private service:ServiceService) { }

  ngOnInit(){
    this.Editar();
  }
  Editar(){
    let id = localStorage.getItem("idTarjeta");
    console.log(this.service.getTargetaId(+id));
     this.service.getTargetaId(+id)
    .subscribe(data=>{
      this.tarjeta=data;
    })

  }
  
  Actualizar(tarjeta:Tarjeta){
    this.service.updateTarjeta(tarjeta)
    .subscribe(data=>{
      this.tarjeta=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }
}
