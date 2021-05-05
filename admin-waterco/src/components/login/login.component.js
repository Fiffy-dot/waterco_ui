import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../Context/Context";
import CustomButton from "../CustomButton/CustomButton";
import lofin_bg from "../../assets/login-bg.jpg";
import { LoginFunction } from "../Utils/AxiosFunctions";
import { CustomSuccessMessage, CustomErrorMessage } from "../Utils/CustomToastMessage";
import { CHECK_AUTH, UPDATE_CURRENT_USER } from "../../reducers/types";
import "./login.styles.scss";



function Login() {
    const history = useHistory();
    const [email_address, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [isSubmiting, setSubmiting] = useState(false);
    const { dispatch } = useContext(Context);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setSubmiting(true);
        const data = { email_address, user_password }
        LoginFunction(data).then((res) => {
            if (res.status === 200){
                localStorage.setItem("token", res.data.token);
                dispatch({ type: CHECK_AUTH, payload: true});
                dispatch({ type: UPDATE_CURRENT_USER, payload: res.data.user});
                console.log(res.data.user);
                history.push("/dashboard");
            }
        }).catch(err => {
            console.log(err);
            CustomErrorMessage({ message: err.response.data.message});
            setSubmiting(false);
        })
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
                    id="email_address"
                    placeholder="Email Address"
                    type="email"
                    value={email_address}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
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
                </div>
                <div> <span onClick={() => history.push("/register")}>
                        Register ? 
                    </span>
                </div>
                <CustomButton 
                    isSubmiting={isSubmiting}
                    type="submit"
                    handleSubmit={handleFormSubmit}
                    onClick={(e) => handleFormSubmit(e)}
                    > Login
                </CustomButton>
            </form>
        </div>
    )
}

export default Login;