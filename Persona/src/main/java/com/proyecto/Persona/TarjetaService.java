
package com.proyecto.Persona;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface TarjetaService {
  List<Tarjeta>listar();
  List<Tarjeta>listarPersona(Persona id);
  Tarjeta listarId(int id);
  Tarjeta add(Tarjeta p);
  Tarjeta editar(Tarjeta p);
  Tarjeta eliminar(int idTarjeta);
}
