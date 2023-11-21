package com.example.crudjava.service;

import com.example.crudjava.Model.Users;
import com.example.crudjava.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class usersService {
    @Autowired
    private userRepository repository;
    //single data add
    public Users saveUser(Users user){
        return repository.save(user);
    }

    // multi data add
    public List<Users> saveUsers(List<Users> users){
        return repository.saveAll(users);
    }

        // get all data in the user
    public List<Users> getUsers(){
        return repository.findAll();
    }
    // get user data using id as similar to other field
    public Users getUserById(int id){
        return repository.findById(id).orElse(null);
    }

    //delete the data
    public String deleteUser(int id){
        repository.deleteById(id);
        return "user removed ! !"+id;
    }

    //user updates
    public Users updateUser(Users user){
        Users existingUser= repository.findById(user.getId()).orElse(null);
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone(user.getPhone());
        return repository.save(existingUser);

    }
}
