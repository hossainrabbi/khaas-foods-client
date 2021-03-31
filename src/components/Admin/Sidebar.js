import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul>
                <li className="nav-item mt-2">
                    <Link to="/admin/manageProduct" className="nav-link">
                        Manage Product
                    </Link>
                </li>
                <li className="nav-item mt-2">
                    <Link to="/admin/addProduct" className="nav-link">
                        Add Product
                    </Link>
                </li>
                <li className="nav-item mt-2">
                    <Link to="/admin/editProduct" className="nav-link">
                        Edit Product
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
