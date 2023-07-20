package com.reto03.grupog1.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reto03.grupog1.DTO.ClientReport;
import com.reto03.grupog1.DTO.StatusReport;
import com.reto03.grupog1.Entities.Reservation;
import com.reto03.grupog1.Services.ReservationService;

@RestController
@RequestMapping("/api/Reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping("/all")
    public ResponseEntity<Object> getAll() {
        return new ResponseEntity<Object>(reservationService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Object>addReservation (@RequestBody Reservation reservation) {
        try {
            reservationService.addReservation(reservation);
            return new ResponseEntity<Object>(null, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
            //si la aplicación recibe un error "se revienta la aplicación" este try es un código que orienta la continuación
        }

        
    }

    @PutMapping ("/update")
    public Reservation updReservation(@RequestBody Reservation reservation) {
        return (Reservation) reservationService.updReservation(reservation);
    }

    @DeleteMapping("/{id}")
    public void delReservation(@PathVariable Integer id) {
        reservationService.delReservation(id);
    }

    @GetMapping ("/{id}")
    public Reservation getReservation(@PathVariable Integer id) {
        return reservationService.getReservation(id);
    }
    
    @GetMapping ("/report-status")
    public StatusReport gStatusReport() {
        return reservationService.getStatusReport();
    }
    
    @GetMapping("/report-dates/{dateOne}/{dateTwo}")
    public List<Reservation> getReservationsReportDates(@PathVariable("dateOne") String dateOne,
            @PathVariable("dateTwo") String dateTwo) {
        return reservationService.getReportReservation(dateOne, dateTwo);
    }
    
    @GetMapping ("/report-clients")
    public List<ClientReport> getClientReport() {
        return reservationService.getTopClientsReport();
    }
}
