package com.jspvel.swift_kart.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.UserService;

@Service
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean validateUserId(String userId) {
        return userId != null && userId.startsWith("User123");
    }

    @Override
    public User registerUser(User user) {
        
    	
        if (!validateUserId(user.getId())) {
            throw new IllegalArgumentException("User ID must start with 'User123'.");
        }
        return userRepository.save(user);
    }
}
