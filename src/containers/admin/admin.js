import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

import ProductForm from "../../components/form/form.js";
import Navbar from "../../components/navbar/navbar.js";

const Admin = () => {
    
    return (
        <React.Fragment>
            <Navbar/>
            <ProductForm/>
        </React.Fragment>
    )
}

export default Admin;