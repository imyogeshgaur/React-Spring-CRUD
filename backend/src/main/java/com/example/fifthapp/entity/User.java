package com.example.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.GenerationType;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;
    public String name;
    public String email;
    public String location;
    public String password;

    public void setEmail(String email) {
        this.email = email;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public void setPassword(String password) {
        this.password = password;
    }

}
