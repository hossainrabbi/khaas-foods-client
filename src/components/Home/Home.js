import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/foods')
            .then((res) => setProducts(res.data));
    }, []);

    return (
        <Container className="mt-5">
            <Row>
                {products.map((product) => (
                    <Col md={4} className="my-3" key={product._id}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
