package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jspvel.swift_kart.util.DeliveryStatus;



public interface DeliveryRepository extends JpaRepository<DeliveryStatus, Long> {

}
