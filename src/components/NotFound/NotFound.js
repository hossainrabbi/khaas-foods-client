import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ height: '100vh' }}
        >
            <div className="text-center text-danger display-4">
                404 Page Not Found
            </div>
        </Container>
    );
};

export default NotFound;
