
package com.proyecto.Persona;

import java.util.Collection;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlTransient;

@Entity
@Table(name ="personas")
public class Persona {

    @Id
    @Column()
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 32)
    @Column()
    private String nombre;
    @Size(max = 32)
    @Column()
    private String apellido;
    @Column()
    private int edad;
//    @OneToMany(mappedBy = "id")
//    private Collection<Tarjeta> tarjetaCollection;
//    

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public Persona() {
    }

    public Persona(Integer id) {
        this.id = id;
    }

    



//    @XmlTransient
//    public Collection<Tarjeta> getTarjetaCollection() {
//        return tarjetaCollection;
//    }
//
//    public void setTarjetaCollection(Collection<Tarjeta> tarjetaCollection) {
//        this.tarjetaCollection = tarjetaCollection;
//    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Persona)) {
            return false;
        }
        Persona other = (Persona) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.proyecto.Persona.Persona[ id=" + id + " ]";
    }

        
}
