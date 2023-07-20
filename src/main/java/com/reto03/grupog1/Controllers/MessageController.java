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

import com.reto03.grupog1.Entities.Message;
import com.reto03.grupog1.Services.MessageService;

@RestController
@RequestMapping("/api/Message")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping("/all")
    public ResponseEntity<Object> getAll() {
        return new ResponseEntity<Object>(messageService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Object> addMessage(@RequestBody Message message) {
        messageService.addMessage(message);
        return new ResponseEntity<Object>(null, HttpStatus.CREATED);
    }

    @PutMapping ("/update")
    public Message updMessage(@RequestBody Message message) {
        return (Message) messageService.updMessage(message);
    }

    @DeleteMapping("/{id}")
    public void delMessage(@PathVariable Integer id) {
        messageService.delMessage(id);
    }

    @GetMapping ("/{id}")
    public Message getMessage(@PathVariable Integer id) {
        return  messageService.getMessage(id);
    }    

}
