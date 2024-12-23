package com.jspvel.swift_kart.entity;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.multipart.MultipartFile;
import com.jspvel.swift_kart.util.Role;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Table(name = "users")
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
	@Max(9999999999l)
	@Min(6000000000l)
	private long phone;

    private String otp;
   
	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;

	private String image;

	@Transient
	private MultipartFile photo;

    private boolean verified;

	
	@OneToMany
	private List<Order> order;

	@OneToMany
	private List<Delivery> delivery;

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
