package com.jspvel.swift_kart.dto;

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
    
    private long id;
    
    @NotBlank(message = "Name cannot be blank")
    @Size(min = 4, message = "Name should be at least 4 characters long")
    private String name;
    
    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Please provide a valid email address")
    private String email;
    
    @Max(9999999999L)
    @Min(6000000000L)
    private long phone;
    
    private Role role; // ENUM (ADMIN, CUSTOMER, SELLER, MANAGER)
    
    private String image;
}
