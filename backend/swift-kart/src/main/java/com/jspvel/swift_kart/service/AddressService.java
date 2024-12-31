package com.jspvel.swift_kart.service;

import com.jspvel.swift_kart.dao.AddressRepository;
import com.jspvel.swift_kart.dao.UserRepository;
import com.jspvel.swift_kart.entity.Address;
import com.jspvel.swift_kart.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    // Add Address
    public Address addAddress(Address address, String userId) {
        // Retrieve the user by ID
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        // Assign the user to the address
        address.setUser(user);

        // Save the address
        return addressRepository.save(address);
    }

    // Update Address
    public Address updateAddress(Address address) {
        return addressRepository.save(address);
    }

    // Delete Address by ID and User ID
    public void deleteAddress(String addressId, String userId) {
        // Retrieve the user by ID
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        // Retrieve the address by ID and ensure it belongs to the user
        Address address = addressRepository.findById(addressId).orElseThrow(() -> new RuntimeException("Address not found"));
        
        // Check if the address belongs to the user
        if (!address.getUser().getId().equals(userId)) {
            throw new RuntimeException("Address does not belong to the specified user.");
        }

        // Delete the address
        addressRepository.delete(address);
    }

    // Get Address by ID
    public Address getAddress(String addressId) {
        return addressRepository.findById(addressId).orElseThrow(() -> new RuntimeException("Address not found"));
    }
}
