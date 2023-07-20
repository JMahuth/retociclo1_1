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

import com.reto03.grupog1.Entities.Gama;
import com.reto03.grupog1.Services.GamaService;

@RestController
@RequestMapping("/api/Gama")
public class GamaController {
    @Autowired
    private GamaService gamaService;

    @GetMapping("/all")
    public ResponseEntity<Object> getAll() {
        return new ResponseEntity<Object>(gamaService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Object> saveGama (@RequestBody Gama gama) {
        System.out.println("Yendo a Services");
        gamaService.addGama(gama);
        return new ResponseEntity<Object>(null, HttpStatus.CREATED);
    }

    @PutMapping ("/update")
    public Gama updGama(@RequestBody Gama gama) {
        return (Gama) gamaService.updGama(gama);
    }

    @DeleteMapping("/{id}")
    public void delGama(@PathVariable Integer id) {
        gamaService.delGama(id);
    }

    @GetMapping ("/{id}")
    public Gama getGama(@PathVariable Integer id) {
        return  gamaService.getGama(id);
    }    

}
