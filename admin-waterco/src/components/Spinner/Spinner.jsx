import React from "react";
import "./Spinner.scss";

const Spinner = () => (
    <div className="spinner-box">
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
);

export default Spinner;