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

import com.reto03.grupog1.Entities.Admin;
import com.reto03.grupog1.Services.AdminService;

@RestController
@RequestMapping("/api/Admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/all")
    public ResponseEntity<Object> getAll() {
        return new ResponseEntity<Object>(adminService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Object> saveAdmin (@RequestBody Admin admin) {
        adminService.addAdmin(admin);
        return new ResponseEntity<Object>(null, HttpStatus.CREATED);
    }

    @PutMapping ("/update")
    public Admin updAdmin(@RequestBody Admin admin) {
        return (Admin) adminService.updAdmin(admin);
    }

    @DeleteMapping("/delete/{id}")
    public void delAdmin(@PathVariable Integer id) {
        adminService.delAdmin(id);
    }

    @GetMapping ("/{id}")
    public Admin getAdmin(@PathVariable Integer id) {
        return  adminService.getAdmin(id);
    }    
}
