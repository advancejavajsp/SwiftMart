package com.jspvel.swift_kart.service;


import java.util.Optional;

import org.springframework.stereotype.Service;


import com.jspvel.swift_kart.entity.User;

@Service
public interface UserService {

	 
	User findByUserEmail(String email);
	
	public String deleteUserByEmail(String email);
	
	public String updateUserDetails(Long id, String newEmail, String newName, long newPhone);
	
}
