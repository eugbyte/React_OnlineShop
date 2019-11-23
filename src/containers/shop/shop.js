import React, {useState, useEffect} from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from "axios";
import {Route, Switch} from "react-router-dom";
import {cloneDeep} from 'lodash';

import Table from "../../components/table/table.js";
import SearchBar from "../../components/searchbar/searchBar.js";
import Navbar from "../../components/navbar/navbar.js";
import CartPage from "../cartPage/cartPage";
import OrderPage from "../orders/orderPage.js";

const Shop = (props) => {

  const [store, setStore] = useState([]);
  const [cart, setCart] = useState([]);
  const [backupCart, setBackupCart] = useState([]);
  const [searchField, setSearchField] = useState("");

   useEffect(() => {
    async function fetchStore () {
      try {
        const res = await axios.get("https://onlineshop-6116a.firebaseio.com/products.json");
        if (Array.isArray(res.data)) {
          setStore(res.data);        
        } else if (typeof(res.data) === "object") {
          let productArr = Object.values(res.data);
          setStore(productArr);
        }
       
      } catch(error) {
        console.log(error);
      }
    };

    async function fetchCart () {
      try {
       const res = await axios.get("https://onlineshop-6116a.firebaseio.com/cart.json");
       if (Array.isArray(res.data)) {
         setCart([res.data[0]]);      
       } else if (typeof(res.data) === "object") {
         //console.log("cart retrieved is object");
         
         let cartArr = Object.values(res.data);
         setCart(cartArr);
       }
      } catch (err) {
        console.log(err);
      }
    }

    fetchStore();
    fetchCart();
  }, []);

  //Cart methods

  //returns index of item in the cart
  const searchCartIndex = (item) => {
    let newCart = cloneDeep(cart);
    let index = -1;
    for (let i = 0; i < newCart.length; i++) {
      let cartItem = newCart[i];
      if (cartItem.id === item.id) {
        index = i;
        break;
      }
    }
    return index;
  }


  const addToCart = (item) => {
    setBackupCart(cart);
    let newCart = cloneDeep(cart);
    let index = searchCartIndex(item);
    if (index === -1) {
      newCart.push({...item, quantity: 1});
    } else if (index >= 0) {
      newCart[index].quantity += 1;
    }
    setCart(newCart);
  };

  const reduceFromCart = (item) => {
    setBackupCart(cart);
    let newCart = cloneDeep(cart);
    let index = searchCartIndex(item);
    if (index !== -1 && newCart[index].quantity >= 1) {
      newCart[index].quantity -= 1;
    }
    if (index !== -1 && newCart[index].quantity === 0) {
      newCart.splice(index);
    }
    setCart(newCart);
  }

  const itemsInCart = cart.reduce( (accum, item) => {
    return accum + item.quantity;
  }, 0);

  //Search functions
  const toggleSearchField = (event) => {
    setSearchField(event.target.value);
  };

  //UseEffect for the change in the cart
  useEffect(() => {    
    axios.put("https://onlineshop-6116a.firebaseio.com/cart.json", cart)
    .then(res => {
      console.log(res.status);
    })
    .catch(err => {
      console.log(err);
      setCart(backupCart);
    });
  }, [cart]);

  return (
      
    <div className="App">
      <Navbar />

        <Switch>
          <Route path={"/cart"}> 
            <CartPage cart={cart} itemsInCart={itemsInCart} increment={addToCart} decrement={reduceFromCart} setCart={setCart} {...props}/>
          </Route>

          <Route path={"/orders"}>
            <OrderPage {...props}/>
          </Route>

          <Route exact path="/">
            <SearchBar change={toggleSearchField} />
            <p>Items in Cart: {itemsInCart}</p>
            <Table data={store} searchField={searchField} click={addToCart}/>
          </Route>

          <Route render={() => <h1>Page Not Found</h1>} />

        </Switch>

    </div>
  );
}

export default Shop;

