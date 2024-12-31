package com.jspvel.swift_kart.dto;

import java.util.List;

import com.jspvel.swift_kart.entity.User;
import com.jspvel.swift_kart.util.Role;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserDTO {
	
	private String userId;
    
    private String name;
    
    private String email;
    
    private long phone;
    
    private String image;

	public UserDTO(User user) {
		this.userId = user.getId();
		this.name = user.getName();
		this.email = user.getEmail();
		this.phone = user.getPhone();
		this.image = user.getImage();
	}
    
    
//    private List<Address> addresses;
    
    
    
    
}
