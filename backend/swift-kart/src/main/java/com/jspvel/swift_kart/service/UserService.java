package com.jspvel.swift_kart.service;

import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dto.UserDTO;

@Service
public interface UserService {

	
	
	UserDTO findByUserEmail(String email);
	
	public String deleteUserByEmail(String email);
	

	String sendOtpToEmail(String email);
	
	String changeUserRoleToDeliveryAgent(String userId);

	String updateUserDetails(String id, UserDTO userDTO);

}
