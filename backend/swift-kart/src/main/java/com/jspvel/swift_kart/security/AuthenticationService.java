package com.jspvel.swift_kart.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.util.CustomIdGenerator;
import com.jspvel.swift_kart.util.Role;

@Service
public class AuthenticationService {
	private final UserRepository userRepository;

	private final PasswordEncoder passwordEncoder;

	private final AuthenticationManager authenticationManager;
	
	@Autowired
	CustomIdGenerator customIdGenerator;

	public AuthenticationService(UserRepository userRepository, AuthenticationManager authenticationManager,
			PasswordEncoder passwordEncoder) {
		this.authenticationManager = authenticationManager;
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public User signup(User user) {


		user.setRole(Role.USER);
		user.setId(customIdGenerator.generateCustomId());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		
        user.setImage(null);
        return userRepository.save(user);
	}


	

	



		
	public User authenticate(String email, String password) {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));

		return userRepository.findByEmail(email).orElseThrow();
	}


	public User signupDeliveryAgent(User user) {
		// TODO Auto-generated method stub
		user.setRole(Role.DELIVERY_AGENT);

		user.setPassword(passwordEncoder.encode(user.getPassword()));

		return userRepository.save(user);

	}
	
	public User signupAdmin(User user) {
		// TODO Auto-generated method stub
		user.setRole(Role.ADMIN);

		user.setPassword(passwordEncoder.encode(user.getPassword()));

		return userRepository.save(user);

	}
}
