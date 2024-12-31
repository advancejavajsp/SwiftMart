package com.jspvel.swift_kart.util;

import org.springframework.stereotype.Component;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

@Component
public class CustomCartIdGenerator {

	private static final String PREFIX = "CART";

	@PersistenceContext
	private EntityManager entityManager;

	@Transactional
	public String generateCustomId() {
		Long nextVal = ((Number) entityManager.createNativeQuery("SELECT nextval('cart_sequence')").getSingleResult())
				.longValue();

		return PREFIX + String.format("%04d", nextVal);
	}
}
