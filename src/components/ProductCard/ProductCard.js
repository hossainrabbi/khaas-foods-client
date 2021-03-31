import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { name, price, imageURL, _id } = product;

    const handleClick = (id) => {
        console.log(id);
    };

    return (
        <Card className="Card">
            <div className="card-img">
                <Card.Img variant="top" src={imageURL} />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Footer className="card-footer d-flex justify-content-between align-items-center">
                    <div className="price">${price}</div>
                    <Link to="/orders" onClick={() => handleClick(_id)}>
                        Buy Now
                    </Link>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
