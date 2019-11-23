import React from "react";
import {NavLink} from "react-router-dom";

import NavBarSkeleton from "./navbarSkeleton.js";

const Navbar = () => {
  let storeNavLink = (
    <NavLink exact to="/" className={"nav-link"}>Store</NavLink>
  );

  let contactNavLink = (
      <NavLink to="/adminpage" className={"nav-link"}>Customer Support</NavLink>
  );

  let cartNavLink = (
      <NavLink to="/cart" className={"nav-link"}>View Cart</NavLink>
  )

  let ordersNavLink = (
    <NavLink to="/orders" className={"nav-link"}>Order History</NavLink>
  )

  let NavLinks = [storeNavLink, cartNavLink, ordersNavLink, contactNavLink];

  return <NavBarSkeleton navLinks={NavLinks} />;
}

export default Navbar;



