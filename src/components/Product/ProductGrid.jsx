
// src/components/Product/ProductGrid.jsx
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ProductCard from './ProductCard';

const products = [
    {
        "title": "Men's Casual Premium Slim Fit T-Shirts",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
        "title": "John Hardy Women's Legends Naga Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        "title": "SanDisk SSD PLUS 1TB Internal SSD",
        "price": 109,
        "description": "Easy upgrade for faster boot up, shutdown, application load and response.",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
    },
    {
        "title": "Silicon Power 256GB SSD 3D NAND A55",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds.",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
    }
];

const ProductGrid = () => {
    return (
        <Row gutter={[16, 16]}>
            {products.map((product) => (
                <Col key={product.title} xs={24} sm={12} md={8} lg={6}>
                    <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    );
};

export default ProductGrid;