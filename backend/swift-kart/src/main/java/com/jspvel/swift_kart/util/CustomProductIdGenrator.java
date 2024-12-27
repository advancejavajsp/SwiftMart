package com.jspvel.swift_kart.util;

<<<<<<< HEAD
=======

>>>>>>> 36651367c7167e54be882a10476ef5284413adfb
import org.springframework.stereotype.Component;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Component
public class CustomProductIdGenrator {
	
   	private static final String PREFIX ="PROD";
   	
   	@PersistenceContext
   	private EntityManager entityManager;
   	
   	@Transactional
    public String generateCustomId() {
        Long nextVal = ((Number) entityManager
                .createNativeQuery("SELECT nextval('pro_sequence')")
                .getSingleResult()).longValue();

        return PREFIX + String.format("%04d", nextVal);
    }
   	
   	

}
