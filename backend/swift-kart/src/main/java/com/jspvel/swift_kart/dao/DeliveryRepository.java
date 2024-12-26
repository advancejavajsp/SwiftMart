package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import com.jspvel.swift_kart.entity.Delivery;

public interface DeliveryRepository extends JpaRepository<Delivery, String> {

}
