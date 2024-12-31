package com.jspvel.swift_kart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.service.imp.UserServiceImp;


@CrossOrigin
@RestController
@RequestMapping("/open/swiftmart")
public class UserController {

	@Autowired
	private UserServiceImp userServiceImp;
	
	@GetMapping("/email/{email}")
	public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
		User user = userServiceImp.findByUserEmail(email);
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}
	
	@DeleteMapping("/user/delete")
	public String deleteUserByEmail(@RequestParam String email) {
		return userServiceImp.deleteUserByEmail(email);
	}
	
	@PutMapping("/update/{id}")
	public String updateUserDetails(@PathVariable String id, @RequestBody User userDetails) {
		return userServiceImp.updateUserDetails(id,userDetails.getEmail(), userDetails.getName(), userDetails.getPhone());
		
	}
	
	 @PutMapping("/user/{id}/role/delivery-agent")
	    public ResponseEntity<String> changeUserRoleToDeliveryAgent(@PathVariable("id") String userId) {
	        String response = userServiceImp.changeUserRoleToDeliveryAgent(userId);
	        return ResponseEntity.status(HttpStatus.OK).body(response);  // Return success message
	    }
	
}
