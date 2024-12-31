package com.jspvel.swift_kart.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jspvel.swift_kart.entity.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, String>{

}
