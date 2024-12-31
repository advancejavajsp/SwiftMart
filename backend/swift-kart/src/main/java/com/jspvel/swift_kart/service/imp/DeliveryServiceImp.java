package com.jspvel.swift_kart.service.imp;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jspvel.swift_kart.dao.DeliveryRepository;
import com.jspvel.swift_kart.entity.Delivery;
import com.jspvel.swift_kart.service.DeliveryService;
import com.jspvel.swift_kart.util.DeliveryCustomIdGenerator;
import com.jspvel.swift_kart.util.DeliveryStatus;

@Service
public class DeliveryServiceImp implements DeliveryService

{

    @Autowired
    private DeliveryCustomIdGenerator deliveryCustomIdGenerator;

    @Autowired
    private DeliveryRepository deliveryRepository;

    private final Map<String, Delivery> deliveryMap = new HashMap<>();

    @Override
    public Delivery createDelivery(Delivery delivery) {
        delivery.setDeliveryId(deliveryCustomIdGenerator.generateDeliveryId());
        
        Delivery savedDelivery = deliveryRepository.save(delivery);
        
        deliveryMap.put(savedDelivery.getDeliveryId(), savedDelivery);
        
        return savedDelivery;
    }

    @Override
    public Delivery trackDeliveryStatus(String id, DeliveryStatus status) {
        Delivery delivery = getDeliveryById(id);
        
        if (delivery != null) {
            delivery.setDeliveryStatus(status);
            
            deliveryRepository.save(delivery);
            
            deliveryMap.put(delivery.getDeliveryId(), delivery);
        }
        
        return delivery; 
    }

    @Override
    public Delivery getDeliveryById(String id) {
        Delivery delivery = deliveryMap.get(id);
        
        if (delivery == null) {
            Optional<Delivery> optionalDelivery = deliveryRepository.findById(id);
            if (optionalDelivery.isPresent()) {
                delivery = optionalDelivery.get();
                
                deliveryMap.put(delivery.getDeliveryId(), delivery);
            }
        }
        
        return delivery; 
	}

}
