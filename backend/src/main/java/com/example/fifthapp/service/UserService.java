package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.entity.User;
import com.example.backend.models.UserRepository;

@Service
public class UserService {
    @Autowired(required = true)
    public UserRepository userRepository;

    public User createUser(String uname,String uemail,String upass,String ulocation){
        User user = new User();
        user.setEmail(uemail);
        user.setName(uname);
        user.setLocation(ulocation);
        user.setPassword(upass);
        
        User savedUser = userRepository.save(user);
        return savedUser;
    }

    public Iterable<User> getAllUsers(){
        Iterable<User> users  = userRepository.findAll();
        return users;
    }
    public User updateUser(int uId,String name,String email,String location,String password){
        User userToChange = userRepository.findById(uId).get();
        if(name!=""){
            userToChange.setName(name);
        }
        if(email!=""){
            userToChange.setEmail(email);
        }
        if(location!=""){
            userToChange.setLocation(location);
        }
        if(password!=""){
            userToChange.setPassword(password);
        }
        User userSaved = userRepository.save(userToChange);
        return userSaved;
    }
    public User getAUser(int uId){
        User user = userRepository.findById(uId).get();
        return user;
    }

    public String deleteUser(int uId){
        User userToDelete = userRepository.findById(uId).get();
        userRepository.delete(userToDelete);
        return "User Of Id " + uId + " deleted Successfully !!!";
    }

    public User registerUser(String name,String email,String password){
        User savedUser = new User();
        savedUser.setUserName(name);
        savedUser.setUserEmail(email);
        savedUser.setUserPasssword(password);
        userRepository.save(savedUser);
        return savedUser;
    }

    public String loginUser(String email,String password){
        User user = userRepository.findByEmail(email);
        if(user.password.compareTo(password)==0){
            return "logged In";
        }
        return "Invalid Credentials";
    }
}
