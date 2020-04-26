
package com.proyecto.Persona;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

@org.springframework.stereotype.Repository
public interface TarjetaRepositorio extends CrudRepository<Tarjeta, Integer>{
    

    List<Tarjeta>findAll();
    List<Tarjeta>findById(Persona id);
    Tarjeta findById(int id);
    Tarjeta save(Tarjeta p);
    void delete(Tarjeta p);
}
