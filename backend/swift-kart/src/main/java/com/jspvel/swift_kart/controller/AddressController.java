package com.jspvel.swift_kart.controller;

import com.jspvel.swift_kart.entity.Address;
import com.jspvel.swift_kart.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/open/shiftmart/address") 
public class AddressController {

    @Autowired
    private AddressService addressService;

   
    @PostMapping("/add/{userId}")
    public ResponseEntity<Address> addAddress(@PathVariable String userId, @RequestBody Address address) {
        try {
            Address addedAddress = addressService.addAddress(address, userId);
            return new ResponseEntity<>(addedAddress, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    
    @PostMapping("/delete/{userId}")
    public ResponseEntity<String> deleteAddress(@RequestParam String addressId, @PathVariable String userId) {
        try {
            addressService.deleteAddress(addressId, userId);
            return new ResponseEntity<>("Address deleted successfully", HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Error: " + e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

   
    @GetMapping("/{addressId}")
    public ResponseEntity<Address> getAddress(@PathVariable String addressId) {
        try {
            Address address = addressService.getAddress(addressId);
            return new ResponseEntity<>(address, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
