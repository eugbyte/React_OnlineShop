import React from "react";
import Cart from "../../components/cart/cart.js";
import axios from "axios";

const CartPage = (props) => {
    let displayCart = (<p>There is nothing in your cart</p>)
    let checkout;

    let onPurchaseHandler = async (event) => {
        try {
           let result = await axios.post('https://onlineshop-6116a.firebaseio.com/orders.json', props.cart);
           console.log(result);
           props.setCart([]);
           props.history.replace('/orders');
        } catch (error) {
            console.log(error);
        }
    }

    if (props.itemsInCart > 0) {
        displayCart = <Cart {...props} />
        checkout = <button className="btn btn-primary" onClick={onPurchaseHandler}>Check Out</button>
    } 

    return (
        <div>
            <h3>Shopping Cart</h3>
            {displayCart}
            {checkout}
        </div>
    ) 
}

export default CartPage