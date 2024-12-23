package com.jspvel.swift_kart.util;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

public class CustomProductIdGenrator {
	
   	private static final String PREFIX ="PRO";
   	
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
