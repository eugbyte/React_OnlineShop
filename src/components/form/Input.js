import React from "react";

const Input = (props) => {

    let attr = props.attr;
    let {name, elementConfig, validation} = attr;
    let title = name.toUpperCase()[0] + name.slice(1, name.length);
    
    let classList = ["form-control"];
    let errorMsg;

    if (validation.isValid === false && validation.firstTouch === false) {
        classList.push("alert alert-danger");
        errorMsg = <small style={{color : "red"}}>{validation.errorMessage}</small>;
    }

    return (
        <div className="from-group">
            <label>{title} &nbsp;  <br/>   
                {errorMsg}    
                <input type= {elementConfig.type}
                        name={name} 
                        onChange={props.change} 
                        placeholder={elementConfig.placeholder} 
                        className = {classList.join(" ")}
                />
            </label>
        </div>
    )
}

export default Input;