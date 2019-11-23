import React from "react";
import styles from "./searchBar.module.css";

const SearchBar = (props) => {
    return(
        <input type="text" onChange={props.change} className={ [styles.TopBottom].join(" ") } placeholder="Search for item" />
    );
}

export default SearchBar;