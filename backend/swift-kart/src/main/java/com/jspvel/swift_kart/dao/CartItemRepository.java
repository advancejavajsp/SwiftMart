package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.jspvel.swift_kart.entity.CartItem;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, String> {

	@Modifying
    @Query("UPDATE CartItem ci SET ci.product = NULL WHERE ci.product.id = :productId")
    void removeProductFromCartItems(@Param("productId") String productId);
}
