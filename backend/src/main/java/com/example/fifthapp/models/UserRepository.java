package com.example.backend.models;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {
    public User findByEmail(String email);
 }
