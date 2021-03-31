import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProduct = () => {
    const [imageURL, setImageURL] = useState('');

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const { name, price } = data;

        const foodData = {
            name,
            price,
            imageURL,
        };

        axios
            .post('http://localhost:8000/addFood', foodData)
            .then((res) => console.log('Post Respons = ', res));
    };

    const handleChange = async (event) => {
        const imageData = new FormData();
        imageData.set('key', '1d0f325c87f75a06168cbae251195067');
        imageData.append('image', event.target.files[0]);

        axios
            .post('https://api.imgbb.com/1/upload', imageData)
            .then((res) => {
                setImageURL(res.data.data.display_url);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Product Name: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    ref={register({ required: true })}
                />
            </Form.Group>
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Product Price: </Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Price"
                            name="price"
                            ref={register({ required: true })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.File
                            label="Add Photo"
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit" disabled={!imageURL && true}>
                Add Product
            </Button>
        </Form>
    );
};

export default AddProduct;
