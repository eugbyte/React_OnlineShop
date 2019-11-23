import React from "react";

const Order = (props) => {
    let orders = props.batch;
    orders = [...orders];

    let batchJSX = [];
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        let name = order.title;
        let quantity = order.quantity;
        let price = order.price;
        batchJSX.push(
            <tr key={i}>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>${price}</td>
            </tr>                
        )
    }

    return (
    <div>
        <table className={ ["table-bordered", "table" ].join(" ") }>
            <caption> &nbsp; batch: {props.batchId}</caption>
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                {batchJSX}
            </tbody>
            
        </table>
        <br/>
    </div>);
}

export default Order;