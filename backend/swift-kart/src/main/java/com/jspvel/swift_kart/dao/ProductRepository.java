package com.jspvel.swift_kart.dao;

<<<<<<< HEAD
=======
import java.util.List;
import java.util.Optional;

>>>>>>> 36651367c7167e54be882a10476ef5284413adfb
import com.jspvel.swift_kart.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {

	Optional<Product> findById(String productId); 
}
