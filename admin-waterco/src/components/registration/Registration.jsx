import React, { useState } from "react";
import lofin_bg from "../../assets/login-bg.jpg";
import CustomButton from "../CustomButton/CustomButton";
import { RegisterFunction } from "../Utils/AxiosFunctions";

import "./Registration.scss";



const Register = () => {

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email_address, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [user_confirm_password, setConfirmPassword] = useState("");
    const [user_city, setUserCity] = useState("");
    const [user_country, setUserCountry] = useState("");
    const [isSubmiting, setSubmiting] = useState(false);
    const [errors, setErrors] = useState({})


    const validate = () => {
        let user_errors = {};
        let isValid = true;
    
        if (!first_name) {
          isValid = false;
          user_errors["first_name"] = "Please enter your first name.";
        }

        if (!user_city) {
            isValid = false;
            user_errors["city"] = "Please enter your current city.";
          }
        
          if (!user_country) {
            isValid = false;
            user_errors["country"] = "Please enter your current country.";
          }

        if (!last_name) {
            isValid = false;
            user_errors["last_name"] = "Please enter your last name.";
          }
    
        if (!email_address) {
          isValid = false;
          user_errors["email"] = "Please enter your email Address.";
        }
    
        if (typeof(email_address) !== "undefined") {
            
          let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(email_address)) {
            isValid = false;
            user_errors["email"] = "Please enter valid email address.";
          }
        }
    
        if (!user_password) {
          isValid = false;
          user_errors["password"] = "Please enter your password.";
        }

        if (!user_confirm_password) {
            isValid = false;
            user_errors["password_confirmation"] = "Please enter your password.";
          }
    
        if (typeof(user_password) !== "undefined" && typeof(user_confirm_password) !== "undefined") {
            
          if (user_password != user_confirm_password) {
            isValid = false;
            user_errors["password"] = "Passwords don't match.";
          }
        } 
        setErrors(user_errors);
    
        return isValid;
    }
     
    const handleFormSubmit = () => {
        const data = {
            first_name,
            last_name ,
            email_address,
            user_password ,
            user_city ,
            user_country
        }
        setSubmiting(true);

        if (validate()){
            RegisterFunction(data).then(res => {
                setSubmiting(false);
                //send the person to the dahsboard
            })
            .catch( err => {
                setSubmiting(false);
            })
        }
    }


    return(
        <div className="login">
            <div className="login-aside">
                <img src={lofin_bg} alt="bg" className="login-aside__img"/>
            </div>
            <form className="login-form">
                <h2 className="login-form__heading">Login</h2>
                <div className="login-form__input-box">
                    <input 
                    className="form-input"
                    id="first_name"
                    placeholder="First Name"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    />
                    <div className="text-danger">{errors.first_name}</div>
                </div>
                <div className="login-form__input-box">
                    <input 
                    className="form-input"
                    id="last_name"
                    placeholder="Last Name"
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    />
                    <div className="text-danger">{errors.last_name}</div>
                </div>
                <div className="login-form__input-box">
                    <input 
                    className="form-input"
                    id="email_address"
                    placeholder="Email Address"
                    type="email"
                    value={email_address}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <div className="text-danger">{errors.email}</div>
                </div>
                <div className="login-form__input-box">
                    <input 
                    className="form-input"
                    id="user_password"
                    placeholder="Password"
                    type="password"
                    value={user_password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <div className="text-danger">{errors.password}</div>
                </div>
                <div className="login-form__input-box">
                    <input 
                    className="form-input"
                    id="user_confirm_password"
                    placeholder="Confirm Password"
                    type="password"
                    value={user_confirm_password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                    <div className="text-danger">{errors.password_confirmation}</div>
                </div>
                <div className="login-form__input-box">
                    <input 
                    className="form-input"
                    id="user_city"
                    placeholder="City"
                    type="text"
                    value={user_city}
                    onChange={(e) => setUserCity(e.target.value)}
                    required
                    />
                    <div className="text-danger">{errors.city}</div>
                </div>
                <div className="login-form__input-box">
                    <input 
                    className="form-input"
                    id="user_country"
                    placeholder="Country"
                    type="text"
                    value={user_country}
                    onChange={(e) => setUserCountry(e.target.value)}
                    required
                    />
                    <div className="text-danger">{errors.country}</div>
                </div>
                <CustomButton 
                    isSubmiting={isSubmiting}
                    type="submit"
                    handleSubmit={handleFormSubmit}
                    onClick={(e) => handleFormSubmit(e)}
                    > Register
                </CustomButton>
            </form>
        </div>
    )
}

export default Register;