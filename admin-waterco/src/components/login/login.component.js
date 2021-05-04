import React, { useState } from "react";
import Input from "../input/Input.component";
import "./login.styles.scss";



const Login = () => {

    const [inputFields, setFields] = useState({
        email_address: "",
        user_password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFields({[name]: value });
    }


    return(
        <div className="login">
            <div className="login-aside"></div>
            <form className="login-form">
                <h2 className="login-form__heading">Login</h2>
                <div className="login-form__input-box">
                    <Input 
                    id="email_address"
                    name="email_address"
                    label="email address"
                    type="email"
                    value={inputFields.email_address}
                    handleChange={handleChange}
                    required
                    />
                </div>
                <div className="login-form__input-box">
                    <Input 
                    id={"user_password"}
                    name={"user_password"}
                    label={"password"}
                    type={"password"}
                    value={inputFields.user_password}
                    handleChange={handleChange}
                    required
                    />
                </div>
            </form>
        </div>
    )
}

export default Login;