import React, {useState, useEffect} from "react";
import axios from "axios";

import Order from "../../components/orders/order.js"

const OrderPage = (props) => {
    let [orderBatches, setorderBatches] = useState([]);

    useEffect(() => {
        async function fetchOrders () {
            let res = await axios.get("https://onlineshop-6116a.firebaseio.com/orders.json");
    
            let retrievedOrders = Object.values(res.data);
            setorderBatches(retrievedOrders);
        };
        fetchOrders();
    }, []);

    return (
        <div>
            <h3>Order Page</h3>
           {orderBatches.map((batch, count) => <Order batch={batch} key={count} batchId={count} /> )}
        </div>

    )
}

export default OrderPage;