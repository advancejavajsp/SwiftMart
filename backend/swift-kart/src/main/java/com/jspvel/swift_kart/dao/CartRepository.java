<<<<<<< HEAD
=======

>>>>>>> 36651367c7167e54be882a10476ef5284413adfb
package com.jspvel.swift_kart.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.entity.Cart;
import com.jspvel.swift_kart.entity.User;

public interface CartRepository extends JpaRepository<Cart, String> {
	Optional<Cart> findByUser(User user);
}
