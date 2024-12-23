package com.jspvel.swift_kart.util;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

public class CustomOrderItemIdGenerator {

	private static final String PREFIX ="ITE";
   	
   	@PersistenceContext
   	private EntityManager entityManager;
   	
   	@Transactional
    public String generateCustomId() {
        Long nextVal = ((Number) entityManager
                .createNativeQuery("SELECT nextval('ITE_sequence')")
                .getSingleResult()).longValue();

        return PREFIX + String.format("%04d", nextVal);
    }
}
