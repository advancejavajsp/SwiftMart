package com.jspvel.swift_kart.dto;

import org.springframework.stereotype.Component;

import com.jspvel.swift_kart.entity.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Component
@NoArgsConstructor
public class UserDTO {
	
    
    private String name;
    
    private String email;
    
    private long phone;
    
    private String image;

	public UserDTO(User user) {
		this.name = user.getName();
		this.email = user.getEmail();
		this.phone = user.getPhone();
		this.image = user.getImage();
	}
    
    
    
    
    
    
}
