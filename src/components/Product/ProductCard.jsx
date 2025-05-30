// src/components/Product/ProductCard.jsx
import React, { useState } from 'react';
import { Card, Button, Image, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/slices/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const quantity = cartItems[product.title]?.quantity || 0;

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Card
                hoverable
                cover={<Image alt={product.title} src={product.image} height={200} preview={false} onClick={() => setIsModalOpen(true)} />}
            >
                <Card.Meta title={product.title} description={`$${product.price}`} />
                <div style={{ marginTop: '10px' }}>
                    <Button onClick={() => dispatch(decrement(product))}>-</Button>
                    <span style={{ margin: '0 10px' }}>{quantity}</span>
                    <Button onClick={() => dispatch(increment(product))}>+</Button>
                </div>
                <Button type="primary" block onClick={() => dispatch(increment(product))} style={{ marginTop: '10px' }}>Add to Cart</Button>
            </Card>

            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                title={product.title}
            >
                <Image src={product.image} width={'100%'} />
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <div style={{ margin: '10px 0' }}>
                    <Button onClick={() => dispatch(decrement(product))}>-</Button>
                    <span style={{ margin: '0 10px' }}>{quantity}</span>
                    <Button onClick={() => dispatch(increment(product))}>+</Button>
                </div>
                <Button type="primary" block onClick={() => dispatch(increment(product))}>Add to Cart</Button>
            </Modal>
        </>
    );
};

export default ProductCard;
