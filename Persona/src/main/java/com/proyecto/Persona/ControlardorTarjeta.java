
package com.proyecto.Persona;

import java.util.List;
import javax.swing.DefaultListModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600) 
@RestController
@RequestMapping({"/tarjeta"})
public class ControlardorTarjeta {
    
    
    @Autowired
    TarjetaService service;
    
    @GetMapping
    public List<Tarjeta>listar(){
    
        return service.listar();
    }
    @GetMapping(path = {"/{id}"})
    public List<Tarjeta> listarPersonas(@PathVariable("id") int id){
        Persona TarjetaIdPersona= new Persona(id);
        System.err.println("Este es el id del usuario de la tarjeta: "+id);
        return service.listarPersona(TarjetaIdPersona);
    }
   @GetMapping(path = {"IdTarjeta/{id_tarjeta}"})
    public Tarjeta listarTarjeta(@PathVariable("idTarjeta") int id){
        
        System.err.println("Este es el id del usuario de la tarjeta: "+id);
        return service.listarId(id);
    }

    @PostMapping
    public Tarjeta agregar(@RequestBody Tarjeta p){
        return service.add(p);
    }
     @PutMapping(path ={"/{id}"})
    public Tarjeta editar(@RequestBody Tarjeta p, @PathVariable("id") int id){

        p.setIdTarjeta(id);
        return service.editar(p);
    }
    @DeleteMapping(path ={"/{id}"})
    public Tarjeta eliminar(@PathVariable("id") int id){
    
        return service.eliminar(id);
    }
}
