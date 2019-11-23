import React from "react";
import styles from "./cart.module.css";

const itemsInCart = (props) => {
    console.log("in Cart");
    let cart = props.cart;
    
    console.log(cart);

    let jsxLst = [];
    for (let item of cart) {
      let name = item.title;
      let price = item.price;
      let quantity = item.quantity;
      let image = item.image;
      jsxLst.push(
        <div className='col-sm-4' key={item.id}>
          <div className={styles.Cart + " card"}> 
            <img img src={"images/" + image} height="250" className="card-img-top" alt="...img"></img>
            <div className='card-body'>
              <p><b>{name}</b></p> 
              <p>quantity: {quantity} </p>
              <p>total: ${quantity * price}</p>
            <button onClick={ ()=>{props.increment(item)} } className="btn btn-outline-dark">Add</button>
            <button onClick={ ()=>{props.decrement(item)} } className="btn btn-outline-dark">Reduce</button>
            </div>
          </div>
        </div>
      );
    }; 

    return  <div className='row'>{jsxLst}</div>
}

export default itemsInCart;
