package com.jspvel.swift_kart.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.image_uploade.CloudinaryImageService;
import com.jspvel.swift_kart.security.AuthenticationService;
import com.jspvel.swift_kart.security.JwtService;
import com.jspvel.swift_kart.util.LoginResponse;

import jakarta.validation.Valid;

@RequestMapping("/auth")
@RestController
@CrossOrigin
public class AuthenticationController {
    private final JwtService jwtService;
    
    @Autowired
	private CloudinaryImageService cloudinaryImageService;
	
    @Autowired
    private final AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody @Valid User registerUserDto) {
//    	if(registerUserDto.getPhoto() == null) {
        User registeredUser = authenticationService.signup(registerUserDto);
//        return ResponseEntity.ok(registeredUser);
//    	}
//    	else {
    		
//    		Map data = this.cloudinaryImageService.upload(registerUserDto.getPhoto());
//    		User registeredUser = authenticationService.signup(registerUserDto);
    		return ResponseEntity.ok(registeredUser);
    		
    		
//		}

//        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/signup/deleviryAgent")
    public ResponseEntity<User> registerDeliveryAgent(@RequestBody @Valid User registerUserDto) {
        User registeredUser = authenticationService.signupDeliveryAgent(registerUserDto);

        return ResponseEntity.ok(registeredUser);
    }
    
    @PostMapping("/signup/admin")
    public ResponseEntity<User> registerAdmin(@RequestBody @Valid User registerUserDto) {
        User registeredUser = authenticationService.signupAdmin(registerUserDto);

        return ResponseEntity.ok(registeredUser);
    }
    
    
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestParam String email,@RequestParam String password) {
        User authenticatedUser = authenticationService.authenticate(email,password);

        String jwtToken = jwtService.generateToken(authenticatedUser);
       System.out.println(email);
        LoginResponse loginResponse = new LoginResponse();
  loginResponse.setToken(jwtToken);
  loginResponse.setExpiresIn(jwtService.getExpirationTime());
        return ResponseEntity.ok(loginResponse);
    }
}
