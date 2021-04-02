import React from 'react';

const OrderItem = ({ product }) => {
    const { name, imageURL, price, date } = product;

    return (
        <div className="OrderItem">
            <img src={imageURL} alt={name} />
            <div className="order-details">
                <h5>{name}</h5>
                <p>By: {price}</p>
                <p>Date: {date}</p>
            </div>
        </div>
    );
};

export default OrderItem;
