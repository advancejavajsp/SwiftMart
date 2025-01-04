package com.jspvel.swift_kart.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.jspvel.swift_kart.util.State;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "addresses")
public class Address {

	@Id
	private String id;
	private String city;
	private String state;
	private int pincode;
	
	@ManyToOne
	@JsonIgnore
	private User user;
	
}
