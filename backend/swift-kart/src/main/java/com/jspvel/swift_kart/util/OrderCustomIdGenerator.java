package com.jspvel.swift_kart.util;

import org.springframework.stereotype.Component;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Component
public class OrderCustomIdGenerator {
private static final String PREFIX = "ORD";
	
    @PersistenceContext

	private EntityManager entityManager;
	
    @Transactional
    public String generateCategoryId() {
    	Long nextVal = ((Number) entityManager
                .createNativeQuery("SELECT nextval('ord_sequence')")
                .getSingleResult()).longValue();

        return PREFIX + String.format("%04d", nextVal);
    }
}
