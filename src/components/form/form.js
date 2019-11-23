import React, {useState} from "react";

import Input from "./Input.js";
import {notNull, numberRequired} from "./validationMethods";

const ProductForm = () => {    

    const [complaint, setProduct] = useState({
        product: {
            value: null,
            name: "product",
            elementConfig: {
                type: "text",
                placeholder: "Enter product name",
                class: "Input"
            },
            validation: {
                required: true,
                firstTouch: true,
                isValid: false,
                errorMessage: null
            }            
        },
        email: {
            value: null,
            name: "email",
            elementConfig: {
                type: "text",
                placeholder: "Enter your email"
            },
            validation: {
                required: true,
                firstTouch: true,
                isValid: true,
                errorMessage: null
            }            
        },
        price: {
            value: null,
            name: "price",
            elementConfig: {
                type: "text",
                placeholder: "Enter Price"
            },
            validation: {
                required: true,
                IsAN: true,
                firstTouch: true,
                isValid: false,
                errorMessage: null
            }            
        }

    });

    let checkInputValidity = (item) => {
        let isValid = true;        
        let itemValidationKeys = Object.keys(item.validation);

        let setErrorMessage = (validationObj) => {
            let newProd = {...complaint};
            newProd[item.name].validation.errorMessage = validationObj.message;
            setProduct(newProd);
        }
        
        if (itemValidationKeys.includes("required") && item.validation["required"] === true) {
            let isInputValid = notNull.validate(item.value);
            if (!isInputValid) {
                setErrorMessage(notNull);
            }
            isValid = isValid && isInputValid;
        }
        if (itemValidationKeys.includes("IsAN") && item.validation["IsAN"] === true) {
            let isInputValid = numberRequired.validate(item.value);
            if (!isInputValid) {
                setErrorMessage(numberRequired);
            }
            isValid = isValid && isInputValid;
        }
        return isValid;
    }

    let checkOverallValid = () => {
        let isOverallValid = true;
        for (let item in complaint) {
            isOverallValid = isOverallValid && checkInputValidity(complaint[item]);
        }
        console.log("isOverallValid:", isOverallValid);
        return isOverallValid;
    }

    let inputChangeHandler = (event, item) => {
        let newProduct = {...complaint};  
        let itemName = item.name
        let value = event.target.value;
        newProduct[itemName].value = value;
        newProduct[itemName].validation.firstTouch = false;
        newProduct[itemName].validation.isValid = checkInputValidity(item)
        setProduct(newProduct);
    }

    let onSubmitHandler = async(event) => {
        event.preventDefault();

         //submit only if overall is valid
        if (checkOverallValid() === false) {
            return;
        }

        let complaintObj = {
            name: complaint.product,
            price: complaint.price,
            comments: complaint.email
        }

        console.log(complaintObj);

    }

    return (
        <form onSubmit={(event) => onSubmitHandler(event)}>
            <div className="form-group">
                <h3>Request Refund</h3>
                <Input attr={complaint.product}
                    change={(event) => inputChangeHandler(event, complaint.product)} />
                <Input attr={complaint.price}
                    change={(event) => inputChangeHandler(event, complaint.price)} />
                <Input attr={complaint.email}
                    change={(event) => inputChangeHandler(event, complaint.email)}  />
                <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
        </form>
    )
}

export default ProductForm;