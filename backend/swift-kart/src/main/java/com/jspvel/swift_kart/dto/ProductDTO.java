package com.jspvel.swift_kart.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDTO {

    private Long productId;

    @NotBlank(message = "Product name cannot be blank")
    private String name;

    @NotNull(message = "Category ID cannot be null")
    private Long categoryId;

    @Positive(message = "Price must be a positive value")
    private double price;

    @Min(value = 0, message = "Quantity must be zero or greater")
    private int quantityAvailable;

    private String imageUrl;

    private String description;
}
