import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { CustomErrorMessage, CustomSuccessMessage } from "../Utils/CustomToastMessage";

const BillAddForm = (props) => {
    const [isSubmiting, setSubmiting] = useState(false);
    const [balance, setBalance] = useState("");
    const [bill_client_id, setClientId] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
        try {
            setSubmiting(true)
            const data =     {
                balance: Number(balance), 
                bill_client_id: Number(bill_client_id), 
                bill_staff_id : 4 //state.currentUser.user_id,
            }
            props.submitForm(data).then( res => {
                if (res.status === 200){
                    setBalance(0);
                    setClientId(4);
                    setSubmiting(false);
                    CustomSuccessMessage({ message: res.data.message});
                }
            }).catch(err => {
                CustomErrorMessage({ message: err.response.data.message});
                setSubmiting(false);
            }) 
        } catch(err){
            CustomErrorMessage({ message: "Error: please check input"})
            setSubmiting(false);
        }
    }

    return (
    <form className="login-form">
        <h2 className="login-form__heading">{props.title}</h2>
            <div className="login-form__input-box">
                <input 
                    className="form-input"
                    id="balance"
                    placeholder="Balance"
                    type="text"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    />
            </div>
            <div className="login-form__input-box">
                    <input 
                    className="form-input"
                    id="clientId"
                    placeholder="Client ID"
                    type="text"
                    value={bill_client_id}
                    onChange={(e) => setClientId(e.target.value)}
                    />
            </div>
            <CustomButton 
                    isSubmiting={isSubmiting}
                    type="submit"
                    handleSubmit={handleFormSubmit}
                    onClick={(e) => handleFormSubmit(e)}
                    > SEND
            </CustomButton>
        </form>
    )
}

export default BillAddForm;