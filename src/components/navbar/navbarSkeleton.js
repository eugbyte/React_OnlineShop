import React from "react";

const NavBarSeleton = (props) => {
    let NavLinks = props.navLinks;
    let jsxNavLinks = NavLinks.map( (link, index) => {
        return (
            <li key = {index} className="nav-item">{link}</li>
            )
    })
   

    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {jsxNavLinks}
    </ul>
  </div>
</nav>
    )
}

export default NavBarSeleton;