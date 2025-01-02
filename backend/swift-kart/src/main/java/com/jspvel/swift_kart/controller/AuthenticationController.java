package com.jspvel.swift_kart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.security.AuthenticationService;
import com.jspvel.swift_kart.security.JwtService;
import com.jspvel.swift_kart.service.UserService;
import com.jspvel.swift_kart.util.LoginResponse;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;

@RequestMapping("/auth")
@RestController
@CrossOrigin
public class AuthenticationController {
	private final JwtService jwtService;

	private final UserService userService;
	private final AuthenticationService authenticationService;

	public static int counter = 1000;

	@Autowired
	public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService,
			UserService userService) {
		this.jwtService = jwtService;
		this.userService = userService;
		this.authenticationService = authenticationService;

	}

	// @PostMapping("/register")
	// public ResponseEntity<RegisterResponse> register_e(@RequestBody
	// RegisterRequest registerRequest){
	// RegisterResponse registerResponse = userService.register(registerRequest);
	// return new ResponseEntity<>(registerResponse,HttpStatus.CREATED);
	// }

	@Operation(summary = "sign up user")
	@ApiResponse(description = "user sign up sucessfull", responseCode = "201")
	@ApiResponse(description = "error in signup", responseCode = "404")
	@PostMapping("/signup")
	public ResponseEntity<User> register(@RequestBody @Valid User registerUserDto) {

		User registeredUser = authenticationService.signup(registerUserDto);

		return ResponseEntity.ok(registeredUser);
	}

	@Operation(summary = "sign up Delivery Agent")
	@ApiResponse(description = "user sign up sucessfull", responseCode = "201")
	@ApiResponse(description = "error in signup", responseCode = "404")
	@PostMapping("/signup/agent")
	public ResponseEntity<User> registerDeliveryAgent(@RequestBody @Valid User registerUserDto) {

		User registeredUser = authenticationService.signupDeliveryAgent(registerUserDto);

		return ResponseEntity.ok(registeredUser);
	}

	@Operation(summary = "sign up Delivery Agent")
	@ApiResponse(description = "user sign up sucessfull", responseCode = "201")
	@ApiResponse(description = "error in signup", responseCode = "404")
	@PostMapping("/signup/admin")
	public ResponseEntity<User> registerAdmin(@RequestBody @Valid User registerUserDto) {

		User registeredUser = authenticationService.signupAdmin(registerUserDto);

		return ResponseEntity.ok(registeredUser);
	}

	@Operation(summary = "Send OTP to the user's email")
	@ApiResponse(description = "OTP sent successfully", responseCode = "200")
	@ApiResponse(description = "Error sending OTP", responseCode = "400")
	@PostMapping("/send-otp")
	public ResponseEntity<String> sendOtp(@RequestParam String email) {
		try {
			String otp = userService.sendOtpToEmail(email);
			return ResponseEntity.ok(otp);
		} catch (Exception e) {
			return ResponseEntity.status(400).body("Error sending OTP: " + e.getMessage());
		}
	}

	@PostMapping("/login")
	public ResponseEntity<LoginResponse> authenticate(@RequestParam String email, @RequestParam String password) {
		User authenticatedUser = authenticationService.authenticate(email, password);

		String jwtToken = jwtService.generateToken(authenticatedUser);
		System.out.println(email);

		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setToken(jwtToken);
		loginResponse.setExpiresIn(jwtService.getExpirationTime());
		return ResponseEntity.ok(loginResponse);
	}

}
