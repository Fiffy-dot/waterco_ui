import React from "react";
import LineSpinner from "../Spinner/LineSpinner";
import "./CustomButton.scss";

const CustomButton = (props) => {
    return (
        <div>
        { props.isSubmiting ?  <LineSpinner />  :
            <button type={props.type} onClick={(e) => props.handleSubmit(e)} 
                className="custom-button">
                {props.children}
            </button>
        }
        </div>
    )
}

export default CustomButton;