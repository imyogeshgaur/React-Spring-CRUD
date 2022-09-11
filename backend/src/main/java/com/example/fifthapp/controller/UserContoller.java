package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@Component
public class UserContoller {
    @Autowired(required = true)
    public UserService userService;
    
    @GetMapping(value="/users")
    @CrossOrigin("*")
    public Iterable<User> getMethodName() {
        return this.userService.getAllUsers();
    }
    @GetMapping(value="/users/{userId}")
    @CrossOrigin("*")
    public User getMethodNameId(@PathVariable("userId") int uId) {
        return this.userService.getAUser(uId);
    }
    
    @PostMapping(value="/users")
    @CrossOrigin("*")
    public User postMethodName(@RequestBody User entity) {
        return this.userService.createUser(entity.name, entity.email, entity.password, entity.location);
    }

    @PutMapping(value = "/users/{userId}")
    @CrossOrigin("*")
    public User putMethodName(@RequestBody User entity,@PathVariable("userId") int uId){
        return this.userService.updateUser(uId,entity.name,entity.email,entity.location,entity.password);
    }

    @DeleteMapping(value = "/users/{userId}")
    @CrossOrigin("*")
    public String deleteMethod(@PathVariable("userId") int uId){
        return this.userService.deleteUser(uId);
    }  
    @PostMapping("/signup")
    public User Signup(@RequestBody User user){
        return this.userService.registerUser(user.name, user.email, user.password);
    }
    @PostMapping("/login")
    public String login(@RequestBody User user){
        return this.userService.loginUser(user.email, user.password);
    }
    
}
