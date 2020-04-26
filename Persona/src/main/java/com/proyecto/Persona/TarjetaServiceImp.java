
package com.proyecto.Persona;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TarjetaServiceImp implements TarjetaService {

    @Autowired(required=true)
    private TarjetaRepositorio repositorioTarjeta;
    @Override
    public List<Tarjeta> listar() {
      
    return  repositorioTarjeta.findAll();
    }

    @Override
    public Tarjeta listarId(int id) {
        return repositorioTarjeta.findById(id);
    }

    @Override
    public Tarjeta add(Tarjeta p) {
        return  repositorioTarjeta.save(p);    }

    @Override
    public Tarjeta editar(Tarjeta p) {
       
        return  repositorioTarjeta.save(p);
    }

    @Override
    public Tarjeta eliminar(int idTarjeta) {
      
 Tarjeta t = repositorioTarjeta.findById(idTarjeta);
        System.out.println("eleiminar");
        if(t!= null){
            System.out.println("eleiminar tarjeta"+idTarjeta);
        repositorioTarjeta.delete(t);
        }
      return t;
    }

    @Override
    public List<Tarjeta> listarPersona(Persona id) {
        return repositorioTarjeta.findById(id);
    }
    
}
