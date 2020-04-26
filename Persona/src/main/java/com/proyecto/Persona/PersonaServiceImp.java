package com.proyecto.Persona;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaServiceImp implements PersonaService{

    @Autowired
    private PersonaRepositorio repositorio;
    
    @Override
    public List<Persona> listar() {
       
        return repositorio.findAll();

    }

    @Override
    public Persona listarId(int id) {
       
        return  repositorio.findById(id);
    }

    @Override
    public Persona add(Persona p) {
        return  repositorio.save(p);
    }

    @Override
    public Persona editar(Persona p) {
      return  repositorio.save(p);
    }

    @Override
    public Persona eliminar(int id) {
        Persona p = repositorio.findById(id);
        System.out.println("eleiminar");
        if(p!= null){
            System.out.println("eleiminar");
        repositorio.delete(p);
        }
      return p;
    }


    
    
}