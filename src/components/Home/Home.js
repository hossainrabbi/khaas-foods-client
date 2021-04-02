import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/foods').then((res) => {
            setProducts(res.data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Container className="mt-5 pt-5">
                <Row>
                    {products.map((product) => (
                        <Col lg={4} md={6} className="my-3" key={product._id}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Home;
