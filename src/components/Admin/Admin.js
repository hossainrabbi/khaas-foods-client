import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import './Admin.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './AddProduct';
import ManageProducts from './ManageProducts';

const Admin = () => {
    return (
        <Router>
            <Container className="Admin">
                <Row>
                    <Col md={3} className="sidebar-container">
                        <Sidebar />
                    </Col>
                    <Col md={9}>
                        <Switch>
                            <Route exact path="/admin/manageProduct">
                                <ManageProducts />
                            </Route>
                            <Route exact path="/admin/addProduct">
                                <AddProduct />
                            </Route>
                            <Route exact path="/admin/editProduct"></Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default Admin;
