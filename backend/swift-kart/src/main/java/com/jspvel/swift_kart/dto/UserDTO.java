package com.jspvel.swift_kart.dto;

import java.util.List;

import org.springframework.stereotype.Component;

import com.jspvel.swift_kart.entity.Address;
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

	private List<Address> address;

	public UserDTO(User user) {
		this.address = user.getAddresses();
		this.name = user.getName();
		this.email = user.getEmail();
		this.phone = user.getPhone();
	}

}
