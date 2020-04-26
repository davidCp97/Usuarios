import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Tarjeta } from '../Modelo/Tarjeta';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

    UrlPersona = 'http://localhost:8080/personas';
    UrlTarjeta = 'http://localhost:8080/tarjeta';
    getPersonas(){
      return this.http.get<Persona[]>(this.UrlPersona);
    }

    getTargetas(){
      return this.http.get<Tarjeta[]>(this.UrlTarjeta);
    }
  
    createPersona(persona: Persona){
      return this.http.post<Persona>(this.UrlPersona,persona);

    }
    createTarjeta(tarjeta: Tarjeta){
      console.log("esta es la tarjeta:" + tarjeta);
      
      return this.http.post<Tarjeta>(this.UrlTarjeta,tarjeta);
    }

    getTargetasId(id:number){
      console.log("Iip:"+ this.http.get<Tarjeta>(this.UrlTarjeta+"/"+id));
      
      return this.http.get<Tarjeta>(this.UrlTarjeta+"/"+id);
    }
    getTargetaId(id:number){
      console.log("Iip:"+ this.http.get<Tarjeta>(this.UrlTarjeta+"/IdTarjeta/"+id));
      
      return this.http.get<Tarjeta>(this.UrlTarjeta+"/IdTarjeta/"+id);
    }
    getPersonaId(id:number){
      return this.http.get<Persona>(this.UrlPersona+"/"+id);
    }
    updatePersona(persona:Persona){
      return this.http.put<Persona>(this.UrlPersona+"/"+persona.id,persona);
    }
    updateTarjeta(tarjeta: Tarjeta){
      return this.http.put<Tarjeta>(this.UrlTarjeta+"/"+tarjeta.idTarjeta,tarjeta);
    }
    deletePersona(persona:Persona){
      return this.http.delete<Persona>(this.UrlPersona+"/"+persona.id)
    }
    deleteTarjeta(tarjeta: Tarjeta){
      return this.http.delete<Tarjeta>(this.UrlTarjeta+"/"+tarjeta.idTarjeta)
    }
    getDropDownValues():Observable<any>{
      return this.http.get<Persona[]>(this.UrlPersona);
    }
}
