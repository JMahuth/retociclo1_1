package com.reto03.grupog1.Entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
/**
 *
 * @author luis_
 */
@Entity
@Table(name="cars")
public class Car implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_car")
    private Integer idCar;
    @Column(name = "name")
    private String name;
    @Column(name = "brand")
    private String brand;
    @Column(name = "year")
    private Integer year;
    @Column(name = "description")
    private String description;
    
    @ManyToOne
    @JoinColumn(name="idGama")
    @JsonIgnoreProperties("cars")
    private Gama gama;

    @OneToMany(cascade = { CascadeType.PERSIST }, mappedBy = "car")
    @JsonIgnoreProperties({ "car", "client" })
    private List<Message> messages;

    @OneToMany(cascade = { CascadeType.PERSIST }, mappedBy = "car")
    @JsonIgnoreProperties("car")
    private List<Reservation> reservations;    
    

    public Car() {
    }







    public Integer getIdCar() {
        return idCar;
    }

    public void setIdCar(Integer idCar) {
        this.idCar = idCar;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the gama
     */
    public Gama getGama() {
        return gama;
    }

    /**
     * @param gama the gama to set
     */
    public void setGama(Gama gama) {
        this.gama = gama;
    }



    public List<Message> getMessages() {
        return messages;
    }



    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }



    public List<Reservation> getReservations() {
        return reservations;
    }



    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    
    
}
