import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Loading from '../Loading/Loading';
import AlertMessage from '../Alert/Alert';

const Checkout = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alertShow, setAlertShow] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/foods').then((res) => {
            setProducts(res.data);
            setLoading(false);
        });
    }, []);

    const buyProduct = products.find((product) => product._id === id);

    const buyData = {
        name: buyProduct?.name,
        price: buyProduct?.price,
        imageURL: buyProduct?.imageURL,
        date: new Date().toLocaleString(),
        email: loggedInUser.email,
    };

    const handleClick = () => {
        axios
            .post('http://localhost:8000/addBuyData', buyData)
            .then(() => setAlertShow(true));
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <Container className="mt-5 pt-5">
            {alertShow && (
                <AlertMessage
                    variant="success"
                    closeBtn={() => setAlertShow(false)}
                    text="Product Ordered Successfully!"
                />
            )}
            <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{buyProduct?.name}</td>
                        <td>1</td>
                        <td>${buyProduct?.price}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <button
                                className="custom-btn"
                                onClick={handleClick}
                            >
                                Checkout
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
    );
};

export default Checkout;
