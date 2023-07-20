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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.reto03.grupog1.Entities.Car;
import com.reto03.grupog1.Services.CarService;

@RestController
@RequestMapping("/api/Car")
public class CarController {
    @Autowired
    private CarService carService;

    @GetMapping("/all")
    public ResponseEntity<Object> getAll() {
        return new ResponseEntity<Object>(carService.getAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Object> saveCar (@RequestBody Car car) {
        carService.addCar(car);
        return new ResponseEntity<Object>(null, HttpStatus.CREATED);
    }

    @PutMapping ("/update")
    public Car updCar(@RequestBody Car car) {
        return (Car) carService.updCar(car);
    }

    @DeleteMapping("/{id}")
    public void delCar(@PathVariable Integer id) {
        carService.delCar(id);
    }

    @GetMapping ("/{id}")
    public Car getCar(@PathVariable Integer id) {
        return  carService.getCar(id);
    }    

}
