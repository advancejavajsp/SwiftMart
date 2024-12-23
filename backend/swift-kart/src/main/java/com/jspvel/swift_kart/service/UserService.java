package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.entity.User;

@Service
public interface UserService {

	/**
     * Validate user ID to ensure it starts with 'User123'.
     *
     * @param userId the user ID to validate
     * @return true if valid, false otherwise
     */
    boolean validateUserId(String userId);

    /**
     * Register a new user.
     *
     * @param user the user to be registered
     * @return the registered user
     */
    User registerUser(User user);


    
}
