import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavManu = () => {
    return (
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Container>
                <Link to="/" className="navbar-brand">
                    Khaas Foods
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/orders" className="nav-link">
                            Orders
                        </Link>
                        <Link to="/admin" className="nav-link">
                            Admin
                        </Link>
                        <Link to="/deals" className="nav-link">
                            Deals
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavManu;
