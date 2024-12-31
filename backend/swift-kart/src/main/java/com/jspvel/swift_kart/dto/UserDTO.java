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
    
    private String name;
    
    private String email;
    
    private long phone;
    
}
