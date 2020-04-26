
package com.proyecto.Persona;


import java.util.List;
import org.springframework.data.repository.CrudRepository;

@org.springframework.stereotype.Repository
public interface PersonaRepositorio extends CrudRepository<Persona, Integer> {
    
    List<Persona>findAll();
    Persona findById(int id);
    Persona save(Persona p);
    void delete(Persona p);
}
