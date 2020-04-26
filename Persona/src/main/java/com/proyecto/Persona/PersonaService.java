package com.proyecto.Persona;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface PersonaService {
    
  List<Persona>listar();
  Persona listarId(int id);
  Persona add(Persona p);
  Persona editar(Persona p);
  Persona eliminar(int id);
}
