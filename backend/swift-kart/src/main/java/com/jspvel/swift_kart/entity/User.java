package com.jspvel.swift_kart.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.multipart.MultipartFile;

import com.jspvel.swift_kart.util.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Table(name = "users_table")
@Entity
@Getter
@Setter
@Validated
public class User implements UserDetails {

	@Id
	private String id;
	@Size(min = 4, message = "name should be more than 4 character")
	private String name;
	@Column(unique = true, nullable = false)
	@Email(message = "valid mail format")
	private String email;
	@Column(unique = true, nullable = false)
	@Max(value = 9999999999L, message = "Phone number should be 10 digits long and start with 6, 7, 8, or 9 ")
    @Min(value = 6000000000L, message = "Phone number should be 10 digits long and start with 6, 7, 8, or 9")
	private long phone;


	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;

	@Column(name = "balance")
	private Double balance;

	@Transient
	private MultipartFile photo;

	@OneToOne(cascade = CascadeType.ALL)
	private Cart cart;

	@OneToMany(mappedBy = "customer_id")
	private List<Order> order = new ArrayList<Order>();

	@OneToMany(mappedBy = "deliveryAgentId")
	private List<Delivery> delivery = new ArrayList<Delivery>();
	@OneToMany(cascade = CascadeType.ALL)
	private List<Address> addresses;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of();
	}

	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}
