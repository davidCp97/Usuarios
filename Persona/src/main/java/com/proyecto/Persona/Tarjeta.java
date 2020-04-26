
package com.proyecto.Persona;
import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name ="tarjeta")
public class Tarjeta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column()
    private Integer idTarjeta;
    @Size(max = 32)
    @Column()
    private String nombre;
    @Column()
    private Integer numero;
    @JoinColumn(name = "ID", referencedColumnName = "id")
    @ManyToOne
    private Persona id;

    public Integer getIdTarjeta() {
        return idTarjeta;
    }

    public void setIdTarjeta(Integer idTarjeta) {
        this.idTarjeta = idTarjeta;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public Persona getId() {
        return id;
    }

    public void setId(Persona id) {
        this.id = id;
    }

 
    

    

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idTarjeta != null ? idTarjeta.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Tarjeta)) {
            return false;
        }
        Tarjeta other = (Tarjeta) object;
        if ((this.idTarjeta == null && other.idTarjeta != null) || (this.idTarjeta != null && !this.idTarjeta.equals(other.idTarjeta))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.proyecto.Persona.Tarjeta[ idTarjeta=" + idTarjeta + " ]";
    }
    
}
