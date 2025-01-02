package com.jspvel.swift_kart.entity;

import com.jspvel.swift_kart.util.State;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Address {

	@Id
	private String id;
	private String doorNo;
	private String street;
	private String city;
	private State state;
	private int pincode;
	@ManyToOne
	private User user;
	
}
