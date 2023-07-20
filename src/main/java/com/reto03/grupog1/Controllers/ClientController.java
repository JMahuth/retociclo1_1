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
import org.springframework.web.client.HttpStatusCodeException;

import com.reto03.grupog1.Entities.Car;
import com.reto03.grupog1.Entities.Client;
import com.reto03.grupog1.Services.ClientService;

@RestController
@RequestMapping("/api/Client")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping("/all")
    public ResponseEntity<Object> getAll() {
        return new ResponseEntity<Object>(clientService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Object> addClient(@RequestBody Client client) {
        clientService.addClient(client);
        return new ResponseEntity<Object>(null, HttpStatus.CREATED);
    }

    @PutMapping ("/update")
    public Client updClient(@RequestBody Client client) {
        return (Client) clientService.updClient(client);
    }

    @DeleteMapping("/{id}")
    public void delClient(@PathVariable Integer id) {
        clientService.delClient(id);
    }

    @GetMapping ("/{id}")
    public Client getClient(@PathVariable Integer id) {
        return  clientService.getClient(id);
    }    

}
