package com.example.crudjava.controller;

import com.example.crudjava.Model.Users;
import com.example.crudjava.service.usersService;
import org.apache.logging.log4j.util.PerformanceSensitive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsersController {
    @Autowired
    private usersService service;


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addUser")
    public Users addUser(@RequestBody Users user){
        return service.saveUser(user);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addUsers")
    public List<Users> addUsers(@RequestBody List<Users> users){
        return service.saveUsers(users);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/Users")
    public List<Users> getUsers(){
        return service.getUsers();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/User/{id}")
    public Users findUserById(@PathVariable int id){
        return service.getUserById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/update")
    public Users updateUser(@RequestBody Users user){
        return service.updateUser(user);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable int id){
        return service.deleteUser(id);
    }
}
