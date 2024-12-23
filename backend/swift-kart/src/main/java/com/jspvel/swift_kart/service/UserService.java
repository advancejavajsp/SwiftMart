package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.email_verification.requests.RegisterRequest;
import com.jspvel.swift_kart.email_verification.responses.RegisterResponse;



    
     
import com.jspvel.swift_kart.entity.User;

@Service
public interface UserService {
	void verify(String email,String otp);

	User findByUserEmail(String email);
	
	public String deleteUserByEmail(String email);
	
	public String updateUserDetails(Long id, String newEmail, String newName, long newPhone);
	
    
  
}
