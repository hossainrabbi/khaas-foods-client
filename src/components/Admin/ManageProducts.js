import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AlertMessage from '../Alert/Alert';
import Loading from '../Loading/Loading';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(false);
    const [alertShow, setAlertShow] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/foods').then((res) => {
            setProducts(res.data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        id &&
            axios
                .delete(`http://localhost:8000/delete/${id}`)
                .then(() => setAlertShow(true));
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="Manage-product mt-5 pt-md-5">
            {alertShow && (
                <AlertMessage
                    variant="danger"
                    closeBtn={() => setAlertShow(false)}
                    text="Product Deleted Successfully!"
                />
            )}
            <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        const { name, price, _id } = product;
                        return (
                            <tr key={_id}>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>
                                    <span className="icon text-success">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </span>
                                    <span
                                        className="icon text-danger"
                                        onClick={() => setId(_id)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;
