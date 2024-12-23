package com.jspvel.swift_kart.service.imp;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.UserService;

@Service
public class UserServiceImp  implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	
 
}
