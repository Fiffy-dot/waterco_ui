import React from "react";
import "./Input.styles.scss";

const Input = ({label, value, handleChange, id, name, type, ...otherProps}) => {
    console.log("value", value);
    return(
        <input 
            className="form-input"
            id={id}
            name={name}
            type={type}
            placeholder={label}
            value={value}
            onChange={(event) => handleChange(event)}
            required
        />
    )
}

export default Input;