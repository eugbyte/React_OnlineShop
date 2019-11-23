import React from "react";
import styles from "./table.module.css";

const Table = (props) => {
    const data = props.data;
    let searchInput = props.searchField.toLowerCase();

    let jsxLstData = [];
    for (let item of data) {
        let {title, color, price, image} = item;
        if (color.toLowerCase().includes(searchInput) || title.toLowerCase().includes(searchInput)) {
            jsxLstData.push(
                <tr key={Math.random() * 10}>
                    <td>{title}</td>
                    <td><img src={"images/" + image} height="80" width="82" alt="...img"></img></td>
                    <td>{price}</td>
                    <td>{color}</td>
                    <td>
                        <button onClick={props.click.bind(null, item)} 
                            className="btn btn-dark"
                        >Add to Cart</button>
                    </td>
                </tr>
            );    
        }
    }
    
    
    return (
        <table className={ ["table-bordered", styles.Table, "table" ].join(" ") }>
            <thead className="thead-light">
                <tr>
                    <th>Item</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Add to Cart</th>
                </tr>                
            </thead>
            <tbody>
                {jsxLstData}
            </tbody>
        </table>
    );
}

export default Table;